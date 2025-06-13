import type { States } from "@components/forms/suhai/insuranceQuote/context/types"
import type { IncluirCotacaoRequest } from "@modules/suhai/incluirCotacao/dtos"
import type { FakerFormProps } from "./types"

export const fakerForm = ({ handleForm }: FakerFormProps): IncluirCotacaoRequest => {
    const data: IncluirCotacaoRequest = {
        anoModelo: "2011",
        cepPernoite: "63900425",
        chassi: "",
        anoFabricacao: "2011",
        cpfCnpj: "13434163883",
        cpfCnpjPrincipalCondutor: "13434163883",
        ddd_cel: "88",
        dtNascimento: "10/10/1998",
        dtNascimentoPrincipalCondutor: "10/10/1998",
        email: "cristiane_cardoso@grupoitamaraty.com.br",
        estadoCivil: "1",
        estadoCivilPrincipalCondutor: "1",
        marca: "GM - Chevrolet",
        modelo: "AGILE LT 1.4 MPFI 8V FlexPower 5p",
        modeloVeiculo: "AGILE LT 1.4 MPFI 8V FlexPower 5p",
        nome: "Cristiane Louise Cardoso",
        nomePrincipalCondutor: "Cristiane Louise Cardoso",
        nro_apolice_ant: "",
        num_cel: "985225923",
        pergunta1: "2",
        pergunta2: "1",
        pergunta3: "1",
        pergunta4: "2",
        placa: "XUX8528",
        possuiOutroVeic: "0",
        sexo: "1",
        sexoPrincipalCondutor: "1",
        tipoContratacao: "1",
        tipoSeguro: "",
        tipoUtilizacao: "3",
        zeroKm: "N",
        cdCobertura: '1010'
    }
    if (handleForm) {
        handleForm({ ...data as States })
    }
    return data
}