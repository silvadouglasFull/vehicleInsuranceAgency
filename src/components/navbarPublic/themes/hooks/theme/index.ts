import { Context } from "@components/navbarPublic/themes/context";
import type { ContextProvider } from "@components/navbarPublic/themes/context/types";
import { useContext } from "react";
export const useTheme = (): ContextProvider => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('use theme must be used within a Provider');
    }
    return context;
}