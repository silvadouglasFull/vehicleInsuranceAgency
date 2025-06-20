/* eslint-disable react-hooks/exhaustive-deps */
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/context/hooks/insuranceQuote";
import { Context } from "@components/forms/suhai/insuranceQuote/paymentDetails/context";
import { states } from "@components/forms/suhai/insuranceQuote/paymentDetails/context/constants";
import type { Event, HandleFormField, States } from "@components/forms/suhai/insuranceQuote/paymentDetails/context/types";
import { reducer } from "@utils/form/reducer";
import React, { useEffect, useReducer } from "react";

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, states)
    const { handleForm: handleFormFromGlobalContext } = useInsuranceQuote()
    useEffect(() => {
        handleFormFromGlobalContext({
            ...state
        })
    }, [state])
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
