import type { States } from '@components/forms/suhai/insuranceQuote/context/types';
import type { TransmitirPropostaRequest } from '@modules/suhai/transmitirProposta/dtos';
import type { ITransformToRequestProposta } from '@modules/suhai/transmitirProposta/services/util/transformToRequestProposta/instance/IInstance';
import type { State } from "@pages/quote/layouts/hooks/useGetParamsScreen/types";

export class TransformToRequestProposta implements ITransformToRequestProposta {
    private readonly contextState: States
    constructor(contextState: States) {
        this.contextState = contextState
    }

    execute(state: State): TransmitirPropostaRequest {
        const ctx = this.contextState;

        const proposta: TransmitirPropostaRequest = {
            protocolo: state.protocolo ?? ctx.protocolo ?? '',
            proposta: String(state.Calculo.numero),
            email: ctx.email ?? '',
            ddd_cel: ctx.ddd_cel ?? '',
            num_cel: ctx.num_cel ?? '',
            ddd_com: '',
            num_com: '',
            ramal_com: '',
            ddd_res: ctx.ddd_cel ?? '',
            num_res: ctx.num_cel ?? '',
            ramal_res: '',
            end_nom_log: ctx.endereco ?? '',
            end_num: '',
            bairro: '',
            end_compl: ctx.endereco ?? '',
            uf: '',
            cidade: '',
            cep: ctx.cepPernoite ?? '',
            cod_ci: '',
            nro_apolice_ant: ctx.nro_apolice_ant ?? '',
            cod_seg_ant: '',
            nome_seg_ant: '',
            chassi: ctx.chassi ?? '',
            placa: ctx.placa ?? '',
            renavam: '',
            data_vig_ini: this.getCurrentDate(),
            tp_pagamento: ctx.formaPagamento ?? '1',
            vecto_demais_parcelas: this.getCurrentDate(),
            qtd_parcelas: String(ctx.quantidadeParcelas ?? state.parcelas?.length ?? 1),
            cdCobertura: state.cdCobertura ?? ctx.cdCobertura ?? '',
            data_saida_concessionaria: ''
        };

        return proposta;
    }

    private getCurrentDate(): string {
        return new Date().toLocaleDateString("pt-BR")
    }
}
