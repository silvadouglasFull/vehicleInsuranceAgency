import type { StatusCode } from "@api/statusCode/types";

/** Request body for including quotation */
export type IncluirCotacaoRequest = {
    cpfCnpj: string;
    nome: string;
    dtNascimento: string; // formato DD/MM/AAAA
    sexo: string; // "1" = Feminino, "2" = Masculino
    estadoCivil: string; // "1" = Casado, "2" = Solteiro, "3" = Outros
    cepPernoite: string;
    marca: string;
    modelo: string;
    modeloVeiculo: string;
    anoModelo: number;
    zeroKm: string;
    chassi: string;
    placa: string;
    utilizacaoDut: string;
    tipoUtilizacao: string;
    possuiOutroVeic: string; // "1" = Sim, "0" = Não
    tipoContratacao: string;
    cpfCnpjPrincipalCondutor: string;
    nomePrincipalCondutor: string;
    dtNascimentoPrincipalCondutor: string;
    sexoPrincipalCondutor: string;
    estadoCivilPrincipalCondutor: string;
    pergunta1: string; // residência
    pergunta2: string; // trabalho
    pergunta3: string; // faculdade
    pergunta4: string; // fora de serviço
    codProduto: string;
    tipoSeguro: string;
    nro_apolice_ant: string;
    ddd_cel: string;
    num_cel: string;
    email: string;
    anoFabricacao: string
};
export type Data = {
    numeroCotacao: string;
    status: string;
    validade: string;
}

/** Response for quotation inclusion */
export interface IncluirCotacaoResponse {
    data: Data
    success: boolean
    error: string
    status: StatusCode
}
