import { Context } from "@components/forms/suhai/insuranceQuote/vehicleData/context";
import { states } from "@components/forms/suhai/insuranceQuote/vehicleData/context/constants";
import type { Event, HandleFormField, States } from "@components/forms/suhai/insuranceQuote/vehicleData/context/types";
import { reducer } from "@utils/form/reducer";
import React, { useReducer } from "react";

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, states)
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
