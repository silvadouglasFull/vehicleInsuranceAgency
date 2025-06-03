import type {
    ConsultarFipeRequest,
    ConsultarFipeResponse
} from '@modules/suhai/consultarFipe/dtos/ConsultarFipe';
import { container } from "@modules/suhai/services/SuhaiService/consultafipe/container";
export const consultaFipe = {
    consultation: async (data: ConsultarFipeRequest): Promise<ConsultarFipeResponse> => {
        const response = await container().post(data);
        return response as ConsultarFipeResponse;
    }
} 