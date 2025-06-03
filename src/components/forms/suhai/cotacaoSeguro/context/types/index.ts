
export type States = {
    codigoFipe: string;
    marca: string;
    modelo: string;
    anoModelo: number;
    cpf: string;
    nome: string;
    email: string;
    telefone: string;
    valor: number;
    numeroCotacao: string;
    status: string;
    validade: string;
    formaPagamento: string;
    quantidadeParcelas: number;
    endereco: string;
    numeroProposta: string;
    pdfPropostaBase64: string;
};

export type ReducerParams = {
    field: keyof States
    value: StateValue
}
export type HandleFormField = States
export type Event = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
export type StateValue = States[keyof States]
export type FormContextType = {
    state: States
    onChange: (event: Event) => void
    onChangePhone: (event: Event) => void
    handleForm: (fields: HandleFormField) => void
}
