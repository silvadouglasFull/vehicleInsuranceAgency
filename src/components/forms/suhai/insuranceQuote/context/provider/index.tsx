import { states } from "@components/forms/suhai/insuranceQuote/constants";
import { Context } from "@components/forms/suhai/insuranceQuote/context";
import type { Event, HandleFormField, States } from "@components/forms/suhai/insuranceQuote/context/types";
import { formatPhoneNumber } from "@utils/form/mask/phone";
import { reducer } from "@utils/form/reducer";
import React, { useEffect, useReducer } from "react";

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, states)
    const { cpf, nome, modelo, telefone }: States = state
    useEffect(() => {
        handleForm({
            cpfCnpj: cpf,
            cpfCnpjPrincipalCondutor: cpf,
            nomePrincipalCondutor: nome,
            modeloVeiculo: modelo,
            num_cel: telefone
        })
    }, [cpf, nome, modelo, telefone])
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
    const onChangePhone = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const { name, value } = target;
        const phone = formatPhoneNumber(value, 'pt')
        dispatch({ field: name as keyof States, value: phone })
    }
    return (
        <Context.Provider value={{
            state,
            onChange,
            onChangePhone,
            handleForm
        }
        }>
            {children}
        </Context.Provider>
    )
}
