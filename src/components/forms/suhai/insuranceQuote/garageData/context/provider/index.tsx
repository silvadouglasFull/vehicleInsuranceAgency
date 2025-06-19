import type { Event, HandleFormField, States } from "@components/forms/suhai/insuranceQuote/context/types";
import { Context } from "@components/forms/suhai/insuranceQuote/garageData/context";
import { states } from "@components/forms/suhai/insuranceQuote/garageData/context/constants";
import { reducer } from "@utils/form/reducer";
import React, { useEffect, useReducer } from "react";

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, states)
    const { cpf, nome, modelo, telefone, anoModelo }: States = state
    useEffect(() => {
        handleForm({
            cpfCnpj: cpf,
            cpfCnpjPrincipalCondutor: cpf,
            nomePrincipalCondutor: nome,
            modeloVeiculo: modelo,
            num_cel: telefone,
            anoFabricacao: String(anoModelo),
        })
    }, [cpf, nome, modelo, telefone, anoModelo])
    const onChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const { name, value } = target;
        dispatch({ field: name as keyof States, value });
    }

    const handleForm = (field: HandleFormField): void => {
        Object.keys(field).map((key) => {
            dispatch({ field: key as keyof States || undefined, value: field[key as keyof States] })
        })
    }
    return (
        <Context.Provider value={{
            state,
            onChange,
            handleForm
        }
        }>
            {children}
        </Context.Provider>
    )
}
