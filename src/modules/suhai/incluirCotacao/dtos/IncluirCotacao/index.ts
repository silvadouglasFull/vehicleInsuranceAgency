/* eslint-disable @typescript-eslint/no-explicit-any */
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
    anoModelo: string;
    zeroKm: string;
    chassi: string;
    placa: string;
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
    tipoSeguro: string;
    nro_apolice_ant: string;
    ddd_cel: string;
    num_cel: string;
    email: string;
    anoFabricacao: string
    cdCobertura: string
};
export type Data = {
    protocolo: string;
    codMsgRet: string;
    textoMsgRet: string;
    premioLiquido: string;
    premioTotalAVista: string;
    premioParcela1: string;
    premioParcela2: string;
    premioParcela3: string;
    premioParcela4: string;
    premioParcela5: string;
    premioParcela6: string;
    premioParcela7: string;
    premioParcela8: string;
    premioParcela9: string;
    premioParcela10: string;
    premioParcela11: string;
    valorFipe: string;
    fatorFipe: string;
    valorFipexFator: string;
    corretor: string;
    rastreador: string | null;
    cdCobertura: string;
    Calculo: {
        Automovel: {
            valorFipe: number;
            fatorFipe: number;
            valorIS: number;
            rastreador: string | null;
        };
        RCF: {
            valorISDanosMateriais: number;
            premioDanosMateriais: number;
            valorISDanosCorporais: number;
            premioDanosCorporais: number;
            valorISDanosMorais: number;
            premioDanosMorais: number;
        };
        Franquia: unknown; // pode substituir por tipo correto se conhecido
        PremioCoberturas: {
            Cobertura: any[]; // defina a estrutura se conhecida
        };
        id: number;
        numero: string;
    };
}
/** Response for quotation inclusion */
export interface IncluirCotacaoResponse {
    data: Data
    success: boolean
    error: string
    status: StatusCode
}
