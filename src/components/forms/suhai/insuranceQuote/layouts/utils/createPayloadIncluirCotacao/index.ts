import { formatPhoneToPayload } from "@components/forms/suhai/insuranceQuote/layouts/utils/createPayloadIncluirCotacao//formaPhoneToPayload";
import { formatDatesToPayload } from "@components/forms/suhai/insuranceQuote/layouts/utils/createPayloadIncluirCotacao/formaDatesToPayload";
import type { CreatePayloadProps } from "@components/forms/suhai/insuranceQuote/layouts/utils/createPayloadIncluirCotacao/types";
import type { IncluirCotacaoRequest } from "@modules/suhai/incluirCotacao/dtos";
import { sanitizeString } from "@utils/transfomerText/sanitizeString";


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
        ddd_cel,
        cdCobertura,
    } = formData
    const dates = formatDatesToPayload({ dtNascimento, dtNascimentoPrincipalCondutor })
    const payload = {
        anoModelo,
        cepPernoite: cepPernoite ? sanitizeString(cepPernoite) : '',
        chassi,
        anoFabricacao: anoFabricacao ? anoFabricacao : '',
        cpfCnpj: cpfCnpj ? sanitizeString(cpfCnpj) : '',
        cpfCnpjPrincipalCondutor: cpfCnpjPrincipalCondutor ? sanitizeString(cpfCnpjPrincipalCondutor) : '',
        ddd_cel,
        ...dates,
        email,
        estadoCivil,
        estadoCivilPrincipalCondutor,
        marca,
        modelo,
        modeloVeiculo,
        nome,
        nomePrincipalCondutor,
        nro_apolice_ant,
        num_cel: (num_cel && ddd_cel) ? formatPhoneToPayload({ ddd_cel, num_cel }) : '',
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
        cdCobertura
    }
    return payload as IncluirCotacaoRequest
}