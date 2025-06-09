import type { ToastStatusCode } from "@components/toast/hooks/useSetVariant/types"
import type { UseToast } from "@components/toast/hooks/useToast/types"
import { useEffect, useState } from "react"


export const useToast = (): UseToast => {
    const [show, setShow] = useState<boolean>(false)
    const [message, setMessage] = useState<string | null>(null)
    const [statusCode, setStatusCode] = useState<ToastStatusCode>(null)
    const onClose = () => {
        setShow(false)
        setMessage('')
        setStatusCode(null)
    }
    useEffect(() => {
        if (message) setShow(true)
        else setShow(false)
    }, [message])
    return {
        show,
        onClose,
        statusCode,
        setStatusCode,
        setMessage,
        message
    }
}