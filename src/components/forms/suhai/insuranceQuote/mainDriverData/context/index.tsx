import type { FormContextType } from "@components/forms/suhai/insuranceQuote/mainDriverData/context/types";
import { createContext } from "react";


export const Context = createContext<FormContextType | undefined>(undefined);
