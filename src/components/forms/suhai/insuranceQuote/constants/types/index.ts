
import type { Event } from "../../context/types"

export type Name = "codigoFipe" | "marca" | "modelo" | "anoModelo" | "cpf" | "nome" | "email" | "telefone" | "veiculo.valor" | "dadosPagamento.formaPagamento" | "dadosPagamento.quantidadeParcelas" | "dadosSegurado.nome" | "dadosSegurado.cpf" | "dadosSegurado.endereco"
export type Label = "Código FIPE" | "Marca" | "Modelo" | "Ano do Modelo" | "CPF" | "Nome Completo" | "E-mail" | "Telefone" | "Valor do Veículo" | "Forma de Pagamento" | "Quantidade de Parcelas" | "Nome do Segurado" | "CPF do Segurado" | "Endereço do Segurado"
export type Type = "text" | "number" | "email" | "tel" | "number" | "select" | "number" | "fipe" | "cpf"
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
}
export type FormProps = {
    type?: Type
    name?: Name
    placeholder?: string
    required?: boolean
    onChange: (event: Event) => void
    tabIndex?: number
}