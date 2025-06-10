
export type States = {
    codigoFipe?: string;
    marca?: string;
    modelo?: string;
    anoModelo?: string;
    cpf?: string;
    nome?: string;
    email?: string;
    telefone?: string;
    valor?: number;
    numeroCotacao?: string;
    status?: string;
    validade?: string;
    formaPagamento?: string;
    quantidadeParcelas?: number;
    endereco?: string;
    numeroProposta?: string;
    pdfPropostaBase64?: string;
    protocolo?: null | string
    codMsgRet?: null | string
    textoMsgRet?: null | string
    cod_fipe?: null | string | number
    num_passageiros?: number
    cod_marca?: null | string | number
    cod_modelo?: null | string | number
    cod_categoria_suhai?: null | string | number
    categoria_suhai?: null | string
    cod_categoria_tarifaria?: null | string | number
    cpfCnpj?: string;
    dtNascimento?: string; // formato DD/MM/AAAA
    sexo?: string; // "1" = Feminino, "2" = Masculino
    estadoCivil?: string; // "1" = Casado, "2" = Solteiro, "3" = Outros
    cepPernoite?: string;
    modeloVeiculo?: string;
    zeroKm?: string;
    chassi?: string;
    placa?: string;
    utilizacaoDut?: string;
    tipoUtilizacao?: string;
    possuiOutroVeic?: string; // "1" = Sim, "0" = Não
    tipoContratacao?: string;
    tabelaComissao?: string;
    classeBonus?: string;
    cpfCnpjPrincipalCondutor?: string;
    nomePrincipalCondutor?: string;
    dtNascimentoPrincipalCondutor?: string;
    sexoPrincipalCondutor?: string;
    estadoCivilPrincipalCondutor?: string;
    pergunta1?: string; // residência
    pergunta2?: string; // trabalho
    pergunta3?: string; // faculdade
    pergunta4?: string; // fora de serviço
    pergunta6?: string; // caminhão
    codProduto?: string;
    tipoSeguro?: string;
    nro_apolice_ant?: string;
    vlr_DanosCorporais?: string;
    vlr_DanosMateriais?: string;
    fator_FipeAjuste?: string;
    fator_Desconto?: string;
    ddd_cel?: string;
    num_cel?: string;
    anoFabricacao?: string
    cdCobertura?: string
};

export type ReducerParams = {
    field: keyof States
    value: StateValue
}
export type HandleFormField = States
export type Event = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
export type StateValue = States[keyof States]
export type FormContextType = {
    state: States
    onChange: (event: Event) => void
    onChangePhone: (event: Event) => void
    handleForm: (fields: HandleFormField) => void
}
