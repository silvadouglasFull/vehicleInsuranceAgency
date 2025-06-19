
import type { Event } from "../../context/types"

export type Name = "codigoFipe"
    | "marca"
    | "modelo"
    | "anoModelo"
    | "cpf"
    | "nome"
    | "email"
    | "telefone"
    | "valor"
    | "formaPagamento"
    | "quantidadeParcelas"
    | "nome"
    | "cpf"
    | "endereco"
    | "sexo"
    | "estadoCivil"
    | "zeroKm"
    | "tipoUtilizacao"
    | "possuiOutroVeic"
    | "tipoContratacao"
    | "sexoPrincipalCondutor"
    | "estadoCivilPrincipalCondutor"
    | "pergunta1"
    | "pergunta2"
    | "pergunta3"
    | "pergunta4"
    | "pergunta6"
    | "cepPernoite"
    | "dtNascimento"
    | "dtNascimentoPrincipalCondutor"
    | "placa"
    | "cdCobertura"
    | "chassi"
export type Label = "Código FIPE"
    | "Marca"
    | "Modelo"
    | "Ano do Modelo"
    | "CPF"
    | "Nome Completo"
    | "E-mail"
    | "Telefone"
    | "Valor do Veículo"
    | "Forma de Pagamento"
    | "Quantidade de Parcelas"
    | "Nome do Segurado"
    | "CPF do Segurado"
    | "Endereço do Segurado"
    | "Sexo"
    | "Estado Civil"
    | "Veículo Zero KM?"
    | "Tipo de Utilização"
    | "Possui outro veículo?"
    | "Tipo de Contratação"
    | "Sexo do Condutor Principal"
    | "Estado Civil do Condutor Principal"
    | "Veículo em garagem na residência?"
    | "Garagem no local de trabalho?"
    | "Garagem na faculdade/colégio?"
    | "Veículo guardado fora de serviço?"
    | "É caminhão e guarda fora do serviço?"
    | "CEP"
    | "Data de Nascimento"
    | "Data de Nascimento do Principal Condutor"
    | "Placa do Veículo"
    | "Tipo de Cobertura"
    | "Chassi do Veículo"
export type Type = "text"
    | "number"
    | "email"
    | "tel"
    | "number"
    | "select"
    | "number"
    | "fipe"
    | "cpf"
    | "marca"
    | "modelo"
    | "zeroKm"
    | "tipoUtilizacao"
    | "possuiOutroVeic"
    | "estadoCivil"
    | "estadoCivilPrincipalCondutor"
    | "sexoPrincipalCondutor"
    | "pergunta1"
    | "pergunta2"
    | "pergunta3"
    | "pergunta4"
    | "tipoContratacao"
    | "sexo"
    | "date"
    | "cepPernoite"
    | "telefone"
    | "cdCobertura"
    | "endereco"
    | "formaPagamento"
export type FormField = {
    id: number
    name: Name
    idControll: Name
    label: Label
    type: Type
    placeholder: string
    required: boolean
    min?: number
    max?: number
    maxLength?: number
    readOnly?: boolean
    helperLink?: string
    title?: string
}
export type FormProps = {
    type?: Type
    name?: Name
    placeholder?: string
    required?: boolean
    onChange: (event: Event) => void
    tabIndex?: number
}
export type GroupForms = Array<number>