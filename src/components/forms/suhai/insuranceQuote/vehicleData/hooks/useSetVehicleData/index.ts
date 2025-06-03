/* eslint-disable react-hooks/exhaustive-deps */
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote"
import type { UseSetVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useSetVehicleData/types"
import { fetchVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/modules/fetchVehicleData"
import { useEffect, useState } from "react"

export const useSetVehicleData = (): UseSetVehicleData => {
    const [loading, setLoading] = useState<boolean>(false)
    const { state, handleForm } = useInsuranceQuote()
    const { codigoFipe } = state
    useEffect(() => {
        const fetchInfo = async () => {
            if (codigoFipe.length >= 6) {
                setLoading(true)
                const response = await fetchVehicleData({ codigoFipe })
                if (response?.data) {
                    const { data: {
                        marca,
                        modelo,
                    } } = response
                    handleForm({
                        ...state,
                        marca: marca ?? '',
                        modelo: modelo ?? '',
                    })
                }
                setLoading(false)
            }
        }
        fetchInfo()
    }, [codigoFipe, codigoFipe.length, state])
    return {
        loading
    }
}