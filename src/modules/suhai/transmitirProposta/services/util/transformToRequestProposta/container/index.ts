import type { States } from '@components/forms/suhai/insuranceQuote/context/types';
import { container as generateDeadlineInstallmentsContainer } from "@modules/suhai/transmitirProposta/services/util/generateDeadlineInstallments/container";
import { container as getInfoAddressToPayloadContainer } from "@modules/suhai/transmitirProposta/services/util/getInfoAddressToPayload/container";
import { TransformToRequestProposta } from '@modules/suhai/transmitirProposta/services/util/transformToRequestProposta/instance';
import type { ITransformToRequestProposta } from '@modules/suhai/transmitirProposta/services/util/transformToRequestProposta/instance/IInstance';
export const container = (state: States): ITransformToRequestProposta => {
    const getInfoAdressToPayload = getInfoAddressToPayloadContainer()
    const generateDeadlineInstallments = generateDeadlineInstallmentsContainer()
    const transformToRequestProposta: ITransformToRequestProposta = new TransformToRequestProposta(state, getInfoAdressToPayload, generateDeadlineInstallments)
    return transformToRequestProposta
}