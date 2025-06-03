import type {
    ConsultarFipeRequest,
    ResponseConsultaFipe
} from '@modules/suhai/consultarFipe/dtos/ConsultarFipe';
import { container } from "@modules/suhai/consultarFipe/services/consultafipe/container";
export const consultaFipe = {
    consultation: async (data: ConsultarFipeRequest): Promise<ResponseConsultaFipe> => {
        const response = await container().post(data);
        return response as ResponseConsultaFipe;
    }
} 