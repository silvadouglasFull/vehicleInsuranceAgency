import { endPoints, host } from "@flavor/whatsapp";
import { usePageExitDetector } from '@hooks/usePageExitDetector';
import { renderHook } from '@testing-library/react-hooks';

describe('usePageExitDetector', () => {
    const mockSendBeacon = jest.fn();

    beforeAll(() => {
        // Mock global navigator.sendBeacon
        Object.defineProperty(window.navigator, 'sendBeacon', {
            writable: true,
            value: mockSendBeacon,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call sendBeacon on beforeunload', () => {
        const mockCallback = () => {
            const payload = { nome: 'Douglas', destino: '5511999999999' };
            const blob = new Blob([JSON.stringify(payload)], {
                type: 'application/json',
            });
            navigator.sendBeacon(`${host}${endPoints.send}`, blob);
        };

        renderHook(() => usePageExitDetector(mockCallback));

        // Simula o evento de sair da página
        const event = new Event('beforeunload');
        window.dispatchEvent(event);

        // Verifica se sendBeacon foi chamado
        expect(mockSendBeacon).toHaveBeenCalledTimes(1);
        expect(mockSendBeacon).toHaveBeenCalledWith(
            `${host}${endPoints.send}`,
            expect.any(Blob)
        );
    });
});
