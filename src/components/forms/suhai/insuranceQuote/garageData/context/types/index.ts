
export type States = {
    pergunta1: string; // residência
    pergunta2: string; // trabalho
    pergunta3: string; // faculdade
    pergunta4: string; // fora de serviço
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
