import type { States } from '@components/forms/suhai/insuranceQuote/context/types';
import { TransformToRequestProposta } from '@modules/suhai/transmitirProposta/services/util/transformToRequestProposta/instance';
import type { ITransformToRequestProposta } from '@modules/suhai/transmitirProposta/services/util/transformToRequestProposta/instance/IInstance';

export const container = (state: States): ITransformToRequestProposta => {
    const transformToRequestProposta: ITransformToRequestProposta = new TransformToRequestProposta(state)
    return transformToRequestProposta
}