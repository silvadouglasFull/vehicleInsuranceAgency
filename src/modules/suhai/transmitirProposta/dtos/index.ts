
/** Request body for transmitting proposal */
export interface TransmitirPropostaRequest {
    protocolo: string;
    proposta: string;
    email: string;
    ddd_cel: string;
    num_cel: string;
    ddd_com: string;
    num_com: string;
    ramal_com: string;
    ddd_res: string;
    num_res: string;
    ramal_res: string;
    end_nom_log: string;
    end_num: string;
    bairro: string;
    end_compl: string;
    uf: string;
    cidade: string;
    cep: string;
    cod_ci: string;
    nro_apolice_ant: string;
    cod_seg_ant: string;
    nome_seg_ant: string;
    chassi: string;
    placa: string;
    renavam: string;
    data_vig_ini: string; // formato: YYYY-MM-DD
    tp_pagamento: string;
    vecto_demais_parcelas: string;
    qtd_parcelas: string;
    cdCobertura: string;
    data_saida_concessionaria: string;
}

/** Response for proposal transmission */
export interface TransmitirPropostaResponse {
    numeroProposta: string;
    status: string;
    pdfPropostaBase64: string;
}
