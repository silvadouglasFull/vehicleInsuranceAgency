import { AxiosHttpClient } from '@core/http/AxiosHttpClient';
import { endPoints } from '@flavor/api';
import type { TransmitirPropostaRequest } from '@modules/suhai/dtos/TransmitirProposta';
import { SuhaiService } from '@modules/suhai/services/SuhaiService/transmitirProposta';

jest.mock('@core/http/AxiosHttpClient');
describe('SuhaiService', () => {
    let suhaiService: SuhaiService;
    let httpClientMock: jest.Mocked<AxiosHttpClient>;

    beforeEach(() => {
        httpClientMock = new AxiosHttpClient('') as jest.Mocked<AxiosHttpClient>;
        suhaiService = new SuhaiService();
        suhaiService.http = httpClientMock;
    });
    it('should transmit a proposal', async () => {
        const input: TransmitirPropostaRequest = {
            numeroCotacao: 'CT123',
            dadosPagamento: {
                formaPagamento: 'boleto',
                quantidadeParcelas: 1
            },
            dadosSegurado: {
                nome: 'Jane Doe',
                cpf: '98765432100',
                endereco: 'Rua Teste, 123'
            }
        };

        const mockResponse = {
            numeroProposta: 'PR456',
            status: 'APROVADA',
            pdfPropostaBase64: 'JVBERi0xLjQKJcTl8uXr...'
        };

        httpClientMock.post.mockResolvedValueOnce(mockResponse);

        const response = await suhaiService.post(input);

        expect(httpClientMock.post).toHaveBeenCalledWith(endPoints.transmitirproposta, input);
        expect(response).toEqual(mockResponse);
    });

});