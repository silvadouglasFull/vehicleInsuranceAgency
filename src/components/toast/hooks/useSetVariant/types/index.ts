import type { StatusCode } from "@api/statusCode/types"
export type ToastStatusCode = StatusCode | null
export type UseSetVariant = {
    statusCode: ToastStatusCode
}