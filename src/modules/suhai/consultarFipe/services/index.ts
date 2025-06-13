import type {
    ConsultarFipeRequest,
    ResponseConsultaFipe
} from '@modules/suhai/consultarFipe/dtos';
import { container } from "@modules/suhai/consultarFipe/services/container";
export const consultaFipe = {
    consultation: async ({ codigoFipe, signal }: ConsultarFipeRequest): Promise<ResponseConsultaFipe> => {
        const response = await container().post({ codigoFipe, signal }) as ResponseConsultaFipe;
        if (!response.success) {
            throw new Error(response.error)
        }
        return response;
    }
} 