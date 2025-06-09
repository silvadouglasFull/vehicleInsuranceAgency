import type { CreatePayloadProps } from "@components/forms/suhai/insuranceQuote/layouts/utils/createPayloadIncluirCotacao/types";
import type { IncluirCotacaoRequest } from "@modules/suhai/incluirCotacao/dtos/IncluirCotacao";
import { formatPhoneNumber } from "@utils/form/mask/phone";
import { getDDDFromPhone } from "@utils/getDDDFromPhone";
import { sanitizeString } from "@utils/sanitizeString";
import { convertToBrazilianDate } from "@utils/transformData";


export const createPayload = ({ formData }: CreatePayloadProps): IncluirCotacaoRequest => {
    const {
        anoModelo,
        cepPernoite,
        chassi,
        cpfCnpj,
        cpfCnpjPrincipalCondutor,
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
        zeroKm,
        anoFabricacao,
    } = formData
    const payload = {
        anoModelo,
        cepPernoite: cepPernoite ? sanitizeString(cepPernoite) : '',
        chassi,
        anoFabricacao: anoFabricacao ? anoFabricacao : '',
        cpfCnpj: cpfCnpj ? sanitizeString(cpfCnpj) : '',
        cpfCnpjPrincipalCondutor: cpfCnpjPrincipalCondutor ? sanitizeString(cpfCnpjPrincipalCondutor) : '',
        ddd_cel: num_cel ? getDDDFromPhone(formatPhoneNumber(num_cel ?? '', 'pt')) : '',
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
        zeroKm
    }
    return payload as IncluirCotacaoRequest
}