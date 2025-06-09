import type { ToastStatusCode } from "@components/toast/hooks/useSetVariant/types"
import type React from "react"

export type useToastProps = {
    message: string
}
export type UseToast = {
    show: boolean
    onClose: () => void
    setStatusCode: React.Dispatch<React.SetStateAction<ToastStatusCode>>
    statusCode: ToastStatusCode
    setMessage: React.Dispatch<React.SetStateAction<string | string[] | null>>
    message: string | string[] | null
}