import type { UseShowDefaultLayout } from "@layouts/public/hooks/useShowDefaultLayout/types"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
export const useShowDefaultLayout = (): UseShowDefaultLayout => {
    const [show, setShow] = useState<boolean>(true)
    const { pathname } = useLocation()
    useEffect(() => {
        const handleShow = () => {
            if (pathname === '/') setShow(true)
            else setShow(false)
        }
        handleShow()
    }, [pathname])
    return { show }
}