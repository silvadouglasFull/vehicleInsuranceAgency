
/** Request body for including quotation */
export type IncluirCotacaoRequest = {
    cpfCnpj: string;
    nome: string;
    dtnascimento: string; // formato DD/MM/AAAA
    sexo: string; // "1" = Feminino, "2" = Masculino
    estadoCivil: string; // "1" = Casado, "2" = Solteiro, "3" = Outros
    cepPerinote: string;
    marca: string;
    modelo: string;
    modeloVeiculo: string;
    anoModelo: string;
    zeroKm: "N" | "I" | "S";
    chassi: string;
    placa: string;
    utilizacaoDut: string;
    tipoUtilizacao: "1" | "2" | "3";
    possuiOutroVeic: string; // "1" = Sim, "0" = Não
    tipoContratacao: "1" | "2" | "3";
    tabelaComissao: string;
    classeBonus: string;
    cpfCnpjPrincipalCondutor: string;
    nomePrincipalCondutor: string;
    dtNascimentoPrincipalCondutor: string;
    sexoPrincipalCondutor: string;
    estadoCivilPrincipalCondutor: string;

    pergunta1: string; // residência
    pergunta2: string; // trabalho
    pergunta3: string; // faculdade
    pergunta4: string; // fora de serviço
    pergunta6: string; // caminhão

    codProduto: string;
    tipoSeguro: string;
    nro_apolice_ant: string;

    vlr_DanosCorporais: string;
    vlr_DanosMateriais: string;
    fator_FipeAjuste: string;
    fator_Desconto: string;

    ddd_cel: string;
    num_cel: string;
    email: string;
};


/** Response for quotation inclusion */
export interface IncluirCotacaoResponse {
    numeroCotacao: string;
    status: string;
    validade: string;
}
