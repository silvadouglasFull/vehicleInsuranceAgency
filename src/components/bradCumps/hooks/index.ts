import type { UseGetImageBradCrumps } from "@components/bradCumps/hooks/types"
import { breadCrumps } from "@flavor/assets"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useGetImageBradCrumps = (): UseGetImageBradCrumps => {
    const { pathname } = useLocation()
    const [midia, setMidia] = useState<string | null>('')
    useEffect(() => {
        const getMidia = () => {
            const find = breadCrumps.find(item => item.url === pathname)
            if (find) {
                const { midia } = find
                setMidia(midia)
            }
        }
        getMidia()
    }, [pathname])
    return {
        midia
    }
}