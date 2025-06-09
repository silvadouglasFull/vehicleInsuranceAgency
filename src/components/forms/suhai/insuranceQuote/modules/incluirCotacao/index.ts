import type { IncluirCotacaoResponse } from "@modules/suhai/incluirCotacao/dtos/IncluirCotacao"
import { incluirCotacao } from "@modules/suhai/incluirCotacao/services/incluirCotacao"
import type { FetchOptions } from "./types"

export const fetchIncluirCotacao = async (payload: FetchOptions): Promise<IncluirCotacaoResponse> => {
    const response = await incluirCotacao.include({ ...payload })
    return { ...response }
}