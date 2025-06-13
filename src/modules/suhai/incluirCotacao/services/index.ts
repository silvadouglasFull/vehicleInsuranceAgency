import type {
    IncluirCotacaoRequest,
    IncluirCotacaoResponse
} from '@modules/suhai/incluirCotacao/dtos';
import { container } from "@modules/suhai/incluirCotacao/services/container";
export const incluirCotacao = {
    include: async (data: IncluirCotacaoRequest): Promise<IncluirCotacaoResponse> => {
        const response = await container().post(data);
        return response as IncluirCotacaoResponse;
    }
} 