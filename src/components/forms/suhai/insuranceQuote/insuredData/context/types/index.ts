
export type States = {
    cpf?: string;
    sexo?: string; // "1" = Feminino, "2" = Masculino
    endereco?: string;
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
