import type { ReducerParams, States } from "@components/forms/contactUs/context/types";

export const reducer = (state: States, { field, value }: ReducerParams): States => ({
    ...state,
    [field]: value,
});
