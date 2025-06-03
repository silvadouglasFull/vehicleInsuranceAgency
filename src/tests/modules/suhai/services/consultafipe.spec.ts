import { AxiosHttpClient } from '@core/http/AxiosHttpClient';
import { endPoints } from '@flavor/api';
import type { ConsultarFipeRequest } from '@modules/suhai/dtos/ConsultarFipe';
import { SuhaiService } from '@modules/suhai/services/SuhaiService/consultafipe';

jest.mock('@core/http/AxiosHttpClient');

describe('SuhaiService', () => {
    let suhaiService: SuhaiService;
    let httpClientMock: jest.Mocked<AxiosHttpClient>;

    beforeEach(() => {
        httpClientMock = new AxiosHttpClient('') as jest.Mocked<AxiosHttpClient>;
        suhaiService = new SuhaiService();
        suhaiService.http = httpClientMock;
    });

    it('should fetch FIPE data', async () => {
        const mockData = {
            marca: 'Honda',
            modelo: 'Civic',
            anoModelo: 2020,
            codigoFipe: '001234'
        };

        const input: ConsultarFipeRequest = { codigoFipe: '001234' };

        httpClientMock.post.mockResolvedValueOnce(mockData);

        const response = await suhaiService.post(input);

        expect(httpClientMock.post).toHaveBeenCalledWith(endPoints.consultafipe, input);
        expect(response).toEqual(mockData);
    });
});
