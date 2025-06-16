import type { States } from "@components/forms/suhai/insuranceQuote/context/types"
import type { State, UseGetParamsSecreen } from "@pages/quote/layouts/hooks/useGetParamsScreen/types"
import { retrieveLocalQuoteData, storageLocalQuoteData } from "@pages/quote/layouts/utils/storageLocalQuoteData"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useGetParamsSecreen = (): UseGetParamsSecreen => {
    const [data, setData] = useState<State | null>(null)
    const [formData, setFormData] = useState<States | null>(null)
    useEffect(() => {
        const storage = async (): Promise<void> => {
            await storageLocalQuoteData(data)
        }
        storage()
    }, [data])
    const { state, pathname } = useLocation()
    const getStoragedLocalParamsScreen = async () => {
        const paramsScreen = await retrieveLocalQuoteData()
        if (paramsScreen) {
            setData(paramsScreen as State)
        }
    }
    useEffect(() => {
        const getParams = () => {
            if (pathname !== '/proposta') {
                return !state && getStoragedLocalParamsScreen()
            }
            const { formData, ...rest } = state
            setFormData(formData)
            setData({ ...rest as State })
        }
        getParams()
    }, [state, pathname])
    return {
        data,
        formData
    }
}