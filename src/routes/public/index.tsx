import { useChangeTitlePage } from '@hooks/useChangeTitlePage'
import { PublicLayout } from '@layouts/public'
import { Home } from '@pages/home'
import type React from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

export const PublicRouter: React.FC = () => {
    const { titlePage } = useChangeTitlePage()
    useEffect(() => {
        window.document.title = titlePage
    }, [titlePage])
    return (
        <Routes>
            <Route path='/' element={<PublicLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}
