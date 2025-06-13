/* eslint-disable react-hooks/exhaustive-deps */

import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote"
import type { UseVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useVehicleData/types"
import { fetchVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/modules/fetchVehicleData"
import type { Data } from "@modules/suhai/consultarFipe/dtos"
import { useEffect, useState } from "react"

/**
 * Custom hook to fetch vehicle data based on Fipe code.
 * @returns {UseVehicleData} loading state and list of vehicle items.
 */
export const useVehicleData = (): UseVehicleData => {
    const [loading, setLoading] = useState<boolean>(false)
    const [items, setItems] = useState<Record<string, Data[]> | null>(null)
    const { state } = useInsuranceQuote()
    const { codigoFipe } = state
    const fetchInfo = async (controller: AbortController) => {
        setLoading(true)
        try {
            const response = await fetchVehicleData({ codigoFipe: codigoFipe ?? '', signal: controller.signal })
            if (response?.data) {
                setItems(response.data)
            } else {
                setItems(null)
            }
        } catch (error) {
            if (typeof error === "object" && error !== null && "name" in error && (error as { name: string }).name !== 'AbortError') {
                console.error('Failed to fetch vehicle data:', error)
                setItems(null)
            }
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        const controller = new AbortController()
        if (codigoFipe?.length === 8) {
            fetchInfo(controller)
        }
        return () => {
            controller.abort()
        }
    }, [codigoFipe])

    return {
        loading,
        items,
        fetchInfo
    }
}