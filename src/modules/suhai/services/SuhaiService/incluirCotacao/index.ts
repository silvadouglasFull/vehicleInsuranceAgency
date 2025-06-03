import type {
    IncluirCotacaoRequest,
    IncluirCotacaoResponse
} from '@modules/suhai/dtos/IncluirCotacao/';
import { container } from "@modules/suhai/services/SuhaiService/consultafipe/container";
export const consultaFipe = {
    include: async (data: IncluirCotacaoRequest): Promise<IncluirCotacaoResponse> => {
        const response = await container().post(data);
        return response as IncluirCotacaoResponse;
    }
} 