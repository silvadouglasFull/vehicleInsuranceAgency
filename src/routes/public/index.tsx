import { useChangeTitlePage } from '@hooks/useChangeTitlePage'
import { PublicLayout } from '@layouts/public'
import { Contacts } from '@pages/contacts'
import { Home } from '@pages/home'
import { Proposta } from '@pages/proposal'
import { Quote } from '@pages/quote'
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
                <Route path='/cotacao' element={<Quote />} />
                <Route path='/proposta' element={<Proposta />} />
                <Route path='/contato' element={<Contacts />} />
            </Route>
        </Routes>
    )
}
