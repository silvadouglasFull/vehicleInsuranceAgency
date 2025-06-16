import type { ReducerParams, States } from "@components/forms/suhai/insuranceQuote/context/types";

export const reducer = (state: States, { field, value }: ReducerParams): States => ({
    ...state,
    [field]: value,
});
