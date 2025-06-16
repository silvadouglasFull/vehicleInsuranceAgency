import type { States } from '@components/forms/suhai/insuranceQuote/context/types';
import { formatPhoneToPayload } from '@components/forms/suhai/insuranceQuote/layouts/utils/createPayloadIncluirCotacao/formaPhoneToPayload';
import type { TransmitirPropostaRequest } from '@modules/suhai/transmitirProposta/dtos';
import type { IInstance as IGetInfoAdressToPayload } from "@modules/suhai/transmitirProposta/services/util/getInfoAddressToPayload/instance/IInstance";
import type { ITransformToRequestProposta } from '@modules/suhai/transmitirProposta/services/util/transformToRequestProposta/instance/IInstance';
import type { State } from "@pages/proposal/layouts/hooks/useGetParamsScreen/types";

export class TransformToRequestProposta implements ITransformToRequestProposta {
    private readonly contextState: States
    private readonly getInfoAdressToPayload: IGetInfoAdressToPayload
    constructor(contextState: States, getInfoAdressToPayload: IGetInfoAdressToPayload) {
        this.contextState = contextState
        this.getInfoAdressToPayload = getInfoAdressToPayload
    }

    async execute(state: State): Promise<TransmitirPropostaRequest> {
        const ctx = this.contextState;
        const { bairro, cidade, ddd_cel: dddCel, ddd_res, uf } = await this.getInfoAdressToPayload.getInfoToPayload({ cep: ctx.cepPernoite ?? '' })
        const ddd_cel = ctx?.ddd_cel ?? dddCel ?? ''
        const { endereco, num_cel } = ctx
        const celular = formatPhoneToPayload({ ddd_cel, num_cel: num_cel ?? '' })
        const proposta: TransmitirPropostaRequest = {
            protocolo: state?.protocolo ?? ctx?.protocolo ?? '',
            proposta: String(state?.Calculo.numero),
            email: ctx?.email ?? '',
            num_cel: celular ?? '',
            ddd_res: ddd_res ?? ddd_cel,
            ddd_com: ddd_cel ?? ddd_res,
            ddd_cel,
            num_com: celular ?? '',
            num_res: celular ?? '',
            ramal_com: '',
            ramal_res: '',
            end_nom_log: endereco ?? '',
            end_num: '0',
            bairro: bairro ?? '',
            end_compl: endereco ?? '',
            uf: uf ?? '',
            cidade: cidade ?? '',
            cep: ctx?.cepPernoite ?? '',
            cod_ci: '',
            nro_apolice_ant: ctx?.nro_apolice_ant ?? '',
            cod_seg_ant: '',
            nome_seg_ant: '',
            chassi: ctx?.chassi ?? '',
            placa: ctx?.placa ?? '',
            renavam: '',
            data_vig_ini: this.getCurrentDate(),
            tp_pagamento: ctx?.formaPagamento ?? '1',
            vecto_demais_parcelas: this.getCurrentDate(),
            qtd_parcelas: String(ctx?.quantidadeParcelas ?? state?.parcelas?.length ?? 1),
            cdCobertura: state?.cdCobertura ?? ctx?.cdCobertura ?? '',
            data_saida_concessionaria: ''
        };

        return proposta;
    }

    private getCurrentDate(): string {
        return new Date().toLocaleDateString("pt-BR")
    }
}
