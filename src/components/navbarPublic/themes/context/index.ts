import type { ContextProvider } from "@components/navbarPublic/themes/context/types";
import { createContext } from "react";

export const Context = createContext<ContextProvider | undefined>(undefined)