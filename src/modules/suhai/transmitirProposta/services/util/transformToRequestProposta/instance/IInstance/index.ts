import type { TransmitirPropostaRequest } from '@modules/suhai/transmitirProposta/dtos'; // ajuste o caminho conforme sua estrutura
import type { State } from "@pages/proposal/layouts/hooks/useGetParamsScreen/types";
export interface ITransformToRequestProposta {
    execute(state: State): Promise<TransmitirPropostaRequest>;
}
