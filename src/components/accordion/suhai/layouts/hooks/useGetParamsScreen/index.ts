import type { State, UseGetParamsSecreen } from "@components/accordion/suhai/layouts/hooks/useGetParamsScreen/types"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useGetParamsSecreen = (): UseGetParamsSecreen => {
    const [data, setData] = useState<State | null>(null)
    const { state, pathname } = useLocation()
    useEffect(() => {
        const getParams = () => {
            if (!state || (pathname !== '/cotacao')) {
                return
            }
            setData({ ...state as State })
        }
        getParams()
    }, [state, pathname])
    return {
        data
    }
}