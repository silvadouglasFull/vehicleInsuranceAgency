/**
 * App Component
 * Estrutura principal da página
 */
import { FallBack } from '@components/fallback';
import { Footer } from '@components/footer';
import NavigationBar from '@components/navbarPublic';
import { slides } from '@flavor/assets';
import { useChangeTitlePage } from '@hooks/useChangeTitlePage';
import { lazy, Suspense, useEffect } from 'react';
const HeroCarousel = lazy(() => import('@components/carousel').then(({ HeroCarousel }) => ({ default: HeroCarousel })))
const Outlet = lazy(() => import("react-router-dom").then(({ Outlet }) => ({ default: Outlet })))

export const PublicLayout = () => {
    const { titlePage } = useChangeTitlePage()
    useEffect(() => {
        window.document.title = titlePage
    }, [titlePage])
    return (
        <>
            <NavigationBar />
            <Suspense fallback={<FallBack />}>
                <HeroCarousel items={slides} />
            </Suspense>
            <Outlet />
            <Footer />
        </>
    );
};

