import type { TransmitirPropostaRequest } from '@modules/suhai/transmitirProposta/dtos';
import { container } from "@modules/suhai/transmitirProposta/services/util/transformToRequestProposta/container";
import type { TransformToRequestProposta } from "@modules/suhai/transmitirProposta/services/util/transformToRequestProposta/types";

export const transformToRequestProposta = {
    transform: ({ stateOfContext, stateOfScreenParams }: TransformToRequestProposta): TransmitirPropostaRequest => container(stateOfContext).execute(stateOfScreenParams)
}