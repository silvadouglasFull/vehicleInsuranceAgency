import type { UseSetClassActive } from "@components/navbarPublic/themes/item/hooks/useSetClassActive/types"
import { useEffect, useState } from "react"

export const useSetClassActive = ({ contextIcon, icon }: UseSetClassActive): boolean => {
    const [active, setActive] = useState<boolean>(false)
    useEffect(() => {
        setActive((contextIcon === icon))
    }, [icon, contextIcon])
    return active
}