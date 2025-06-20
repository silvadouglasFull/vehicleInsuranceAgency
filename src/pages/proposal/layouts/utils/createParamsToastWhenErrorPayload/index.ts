import type { CreateParamsToastWhenErrorPayload } from "@pages/proposal/layouts/utils/createParamsToastWhenErrorPayload/types";

export const createParamsToastWhenErrorPayload = (): CreateParamsToastWhenErrorPayload => {
    return {
        message: 'Algo deu errado, por favor preencha o Formulário de Cotação Novamente',
        statusCode: 420,
    }
}