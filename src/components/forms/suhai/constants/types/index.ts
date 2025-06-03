
export type Labels =
    'Código FIPE' | 'Marca' | 'Modelo' | 'Ano do Modelo' | 'CPF' | 'Nome Completo' | 'E-mail' | 'Telefone' | 'Valor do Veículo' | 'Forma de Pagamento' | 'Quantidade de Parcelas' | 'Nome do Segurado' | 'CPF do Segurado' | 'Endereço do Segurado'
export type Names =
    "codigoFipe" | "marca" | "modelo" | "anoModelo" | "cpf" | "nome" | "email" | "telefone" | "veiculo.valor" | "dadosPagamento.formaPagamento" | "dadosPagamento.quantidadeParcelas" | "dadosSegurado.nome" | "dadosSegurado.cpf" | "dadosSegurado.endereco"
export type InputType =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'textarea'
export type FormField = {
    id: number;
    idControll: string;
    label: Labels;
    name: Names;
    type: InputType;
    placeholder: string;
    required: boolean;
}
export type TButtonsLabels = {
    text: string
}
