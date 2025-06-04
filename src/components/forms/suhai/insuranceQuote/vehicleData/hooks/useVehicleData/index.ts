
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote"
import type { UseVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useVehicleData/types"
import { fetchVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/modules/fetchVehicleData"
import type { Data } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe"
import { useEffect, useState } from "react"

export const useVehicleData = (): UseVehicleData => {
    const [loading, setLoading] = useState<boolean>(false)
    const { state } = useInsuranceQuote()
    const [items, setItems] = useState<Data[] | []>([])
    const { codigoFipe } = state
    useEffect(() => {
        const fetchInfo = async () => {
            if (codigoFipe && (codigoFipe?.length === 8)) {
                setLoading(true)
                const response = await fetchVehicleData({ codigoFipe })
                if (response?.data?.length) {
                    const { data } = response
                    setItems(data)
                }
                setLoading(false)
            }
        }
        fetchInfo()
    }, [codigoFipe])
    return {
        loading,
        items,
    }
}