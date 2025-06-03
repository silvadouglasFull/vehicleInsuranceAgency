import type { UseGetNamePage } from "@components/bradCumps/title/hooks/useGetNamePage/types"
import { links } from "@flavor/links"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useGetNamePage = (): UseGetNamePage => {
    const { pathname } = useLocation()
    const [namePage, setNamePage] = useState<string>('')
    useEffect(() => {
        const getNamePage = () => {
            const find = links.find(item => (item.route === pathname))
            if (find) {
                const { namePage } = find
                setNamePage(namePage)
            }
        }
        getNamePage()
    }, [pathname])
    return { namePage }
}