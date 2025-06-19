
export type States = {
    dtNascimentoPrincipalCondutor?: string; // formato DD/MM/AAAA
    sexoPrincipalCondutor?: string;         // "1" = Feminino, "2" = Masculino
    estadoCivilPrincipalCondutor?: string;  // "1" = Casado, "2" = Solteiro, "3" = Outros
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
