import type { UseSetVariant } from '@components/toast/hooks/useSetVariant/types';
export type Toast = {
    message?: string | string[] | null
    show?: boolean
    onclose: () => void
}
export type ToastProps = Toast & UseSetVariant