import type { UseStartWebSocketConnection } from "@pages/proposal/hooks/useStartWebSocketConnection/types"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useStartWebSocketConnection = (): UseStartWebSocketConnection => {
    const { pathname } = useLocation()
    const [shouldConnect, setShouldConnect] = useState<boolean>(false)
    useEffect(() => {
        setShouldConnect(pathname === '/proposta')
    }, [pathname])
    return {
        shouldConnect,
    }
}