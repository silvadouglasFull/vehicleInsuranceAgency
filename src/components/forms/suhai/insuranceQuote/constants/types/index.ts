export type Name = "codigoFipe" | "marca" | "modelo" | "anoModelo" | "cpf" | "nome" | "email" | "telefone" | "veiculo.valor" | "dadosPagamento.formaPagamento" | "dadosPagamento.quantidadeParcelas" | "dadosSegurado.nome" | "dadosSegurado.cpf" | "dadosSegurado.endereco"
export type Label = "Código FIPE" | "Marca" | "Modelo" | "Ano do Modelo" | "CPF" | "Nome Completo" | "E-mail" | "Telefone" | "Valor do Veículo" | "Forma de Pagamento" | "Quantidade de Parcelas" | "Nome do Segurado" | "CPF do Segurado" | "Endereço do Segurado"
export type Type = "text" | "text" | "text" | "number" | "text" | "text" | "email" | "tel" | "number" | "text" | "number" | "text" | "text" | "text"
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
}
