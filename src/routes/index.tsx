import { PublicRouter } from '@publicRouter/index'
import type React from 'react'
import { BrowserRouter } from 'react-router-dom'
export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <PublicRouter />
        </BrowserRouter>
    )
}
