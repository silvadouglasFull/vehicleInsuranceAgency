import type { UseGetNamePage } from "@components/bradCumps/title/hooks/useGetNamePage/types"
import { useLanguage } from "@context/language/hooks"
import { links } from "@utils/linksHeader"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useGetNamePage = (): UseGetNamePage => {
    const { pathname } = useLocation()
    const { language } = useLanguage()
    const [namePage, setNamePage] = useState<string>('')
    useEffect(() => {
        const getNamePage = () => {
            const find = links.find(item => (item.url === pathname) && (item.language === language))
            if (find) {
                const { title } = find
                setNamePage(title)
            }
        }
        getNamePage()
    }, [pathname, language])
    return { namePage }
}