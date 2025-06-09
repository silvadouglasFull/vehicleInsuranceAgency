import { variants } from "@components/toast/constants"
import type { Item } from "@components/toast/constants/types"
import type { UseSetVariant } from "@components/toast/hooks/useSetVariant/types"
import { useEffect, useState } from "react"


export const useSetVariant = ({ statusCode }: UseSetVariant): Item => {
    const findVariant = (statusCode = 200): Item => {
        return variants.find(item => item.statusCode === statusCode) ?? variants[0]
    }
    const defaultVariant: Item = findVariant(statusCode ?? 200)
    const [variant, setVariant] = useState<Item>(defaultVariant)
    useEffect(() => {
        if (statusCode !== null) {
            setVariant(findVariant(statusCode) ?? defaultVariant)
        }
    }, [statusCode])
    return {
        ...variant
    }
}