
export type States = {
    cpf?: string;
    dtNascimento?: string;        // formato DD/MM/AAAA
    nome?: string;
    telefone?: string;
    ddd_cel?: string
    email?: string;
    cepPernoite?: string;
    endereco?: string;
    estadoCivil?: string;         // "1" = Casado, "2" = Solteiro, "3" = Outros
    sexo?: string;                // "1" = Feminino, "2" = Masculino
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
    handleForm: (fields: HandleFormField) => void
}
