import type { Themes } from "@components/navbarPublic/themes/constants/types"

export type ContextProvider = {
    theme: Themes
    setTheme: React.Dispatch<React.SetStateAction<Themes>>
}