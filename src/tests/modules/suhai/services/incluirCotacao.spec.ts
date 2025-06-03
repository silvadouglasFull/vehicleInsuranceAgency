import { AxiosHttpClient } from '@core/http/AxiosHttpClient';
import { endPoints } from '@flavor/api';
import type { IncluirCotacaoRequest } from '@modules/suhai/dtos/IncluirCotacao';
import { SuhaiService } from '@modules/suhai/services/SuhaiService/incluirCotacao';

jest.mock('@core/http/AxiosHttpClient');
describe('SuhaiService', () => {
    let suhaiService: SuhaiService;
    let httpClientMock: jest.Mocked<AxiosHttpClient>;

    beforeEach(() => {
        httpClientMock = new AxiosHttpClient('') as jest.Mocked<AxiosHttpClient>;
        suhaiService = new SuhaiService();
        suhaiService.http = httpClientMock;
    });
    it('should include a quotation', async () => {
        const input: IncluirCotacaoRequest = {
            cpf: '12345678900',
            nome: 'John Doe',
            email: 'john@example.com',
            telefone: '11999999999',
            veiculo: {
                codigoFipe: '001234',
                marca: 'Honda',
                modelo: 'Civic',
                anoModelo: 2020,
                valor: 80000
            }
        };

        const mockResponse = {
            numeroCotacao: 'CT123',
            status: 'OK',
            validade: '2025-12-31'
        };

        httpClientMock.post.mockResolvedValueOnce(mockResponse);

        const response = await suhaiService.post(input);

        expect(httpClientMock.post).toHaveBeenCalledWith(endPoints.incluircotacao, input);
        expect(response).toEqual(mockResponse);
    });
});