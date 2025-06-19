
export type States = {
    codigoFipe?: string;
    marca?: string;
    modelo?: string;
    valor?: string;
    placa?: string;
    zeroKm?: string;
    chassi?: string;
    tipoUtilizacao?: string;
    possuiOutroVeic?: string; // "1" = Sim, "0" = Não
    categoria?: string
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
