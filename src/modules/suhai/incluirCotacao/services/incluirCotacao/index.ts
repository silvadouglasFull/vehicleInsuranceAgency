import type {
    IncluirCotacaoRequest,
    IncluirCotacaoResponse
} from '@modules/suhai/incluirCotacao/dtos/IncluirCotacao';
import { container } from "@modules/suhai/incluirCotacao/services/incluirCotacao/container";
export const incluirCotacao = {
    include: async (data: IncluirCotacaoRequest): Promise<IncluirCotacaoResponse> => {
        const response = await container().post(data);
        return response as IncluirCotacaoResponse;
    }
} 