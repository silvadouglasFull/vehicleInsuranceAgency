import type { CreatePayloadProps } from "@components/forms/suhai/insuranceQuote/layouts/utils/createPayloadIncluirCotacao/types";
import type { IncluirCotacaoRequest } from "@modules/suhai/incluirCotacao/dtos/IncluirCotacao";
import { getDDDFromPhone } from "@utils/getDDDFromPhone";
import { sanitizeString } from "@utils/sanitizeString";
import { convertToBrazilianDate } from "@utils/transformData";


export const createPayload = ({ formData }: CreatePayloadProps): IncluirCotacaoRequest => {
    const {
        anoModelo,
        cepPerinote,
        chassi,
        cpfCnpj,
        cpfCnpjPrincipalCondutor,
        ddd_cel,
        dtNascimento,
        dtNascimentoPrincipalCondutor,
        email,
        estadoCivil,
        estadoCivilPrincipalCondutor,
        marca,
        modelo,
        modeloVeiculo,
        nome,
        nomePrincipalCondutor,
        nro_apolice_ant,
        num_cel,
        pergunta1,
        pergunta2,
        pergunta3,
        pergunta4,
        placa,
        possuiOutroVeic,
        sexo,
        sexoPrincipalCondutor,
        tipoContratacao,
        tipoSeguro,
        tipoUtilizacao,
        utilizacaoDut,
        zeroKm
    } = formData
    return {
        anoModelo,
        cepPerinote: cepPerinote ? sanitizeString(cepPerinote) : '',
        chassi,
        cpfCnpj: cpfCnpj ? sanitizeString(cpfCnpj) : '',
        cpfCnpjPrincipalCondutor: cpfCnpjPrincipalCondutor ? sanitizeString(cpfCnpjPrincipalCondutor) : '',
        ddd_cel: ddd_cel ? getDDDFromPhone(ddd_cel) : '',
        dtNascimento: dtNascimento ? convertToBrazilianDate(dtNascimento) : '',
        dtNascimentoPrincipalCondutor: dtNascimentoPrincipalCondutor ? convertToBrazilianDate(dtNascimentoPrincipalCondutor) : '',
        email,
        estadoCivil,
        estadoCivilPrincipalCondutor,
        marca,
        modelo,
        modeloVeiculo,
        nome,
        nomePrincipalCondutor,
        nro_apolice_ant,
        num_cel: num_cel ? sanitizeString(num_cel) : '',
        pergunta1,
        pergunta2,
        pergunta3,
        pergunta4,
        placa,
        possuiOutroVeic,
        sexo,
        sexoPrincipalCondutor,
        tipoContratacao,
        tipoSeguro,
        tipoUtilizacao,
        utilizacaoDut,
        zeroKm
    } as IncluirCotacaoRequest
}