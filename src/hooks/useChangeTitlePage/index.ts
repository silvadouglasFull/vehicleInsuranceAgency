import { nameFlavor as flavor } from "@flavor/index"
import type { UseChangeTitlePageReturn } from "@hooks/useChangeTitlePage/types"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


export const useChangeTitlePage = (): UseChangeTitlePageReturn => {
    const [titlePage, setTitlePage] = useState<string>(flavor)
    const { pathname } = useLocation()
    useEffect(() => {
        const changeTitlePage = () => {
            if (pathname === '/') {
                return setTitlePage(`${flavor} | Inicio`)
            }
            setTitlePage(`${flavor} | ${pathname.replace('/', '')}`)
        }
        changeTitlePage()
    }, [pathname])
    return {
        titlePage
    }
}