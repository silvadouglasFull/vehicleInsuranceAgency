import { themes } from "@components/navbarPublic/themes/constants"
import type { Themes } from "@components/navbarPublic/themes/constants/types"
import { Context } from "@components/navbarPublic/themes/context"
import { changeTheme } from "@components/navbarPublic/themes/util/changeTheme"
import type React from "react"
import { useEffect, useState } from "react"
export const Provider: React.FC<React.PropsWithChildren> = ({ children }: React.PropsWithChildren) => {
    const [theme, setTheme] = useState<Themes>(themes[0])
    useEffect(() => {
        if (theme) {
            changeTheme({ ...theme })
        }
    }, [theme])
    return (
        <Context.Provider
            value={{
                theme,
                setTheme
            }}>
            {children}
        </Context.Provider>
    )
}