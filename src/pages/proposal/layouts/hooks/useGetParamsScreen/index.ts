import type { States } from "@components/forms/suhai/insuranceQuote/context/types"
import { themes } from "@components/navbarPublic/themes/constants"
import type { State, UseGetParamsSecreen } from "@pages/proposal/layouts/hooks/useGetParamsScreen/types"
import { retrieveLocalQuoteData, storageLocalQuoteData } from "@pages/proposal/layouts/utils/storageLocalQuoteData"
import { replaceMultiple } from "@utils/transfomerText"
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
            const formatPath = replaceMultiple(pathname, themes.map(item => `#${item.theme}`), '')
            if (formatPath !== '/proposta') {
                return
            }
            if (state) {
                const { formData, ...rest } = state
                setFormData(formData)
                setData({ ...rest as State })
            } else {
                getStoragedLocalParamsScreen()
            }
        }
        getParams()
    }, [state, pathname])
    return {
        data,
        formData
    }
}