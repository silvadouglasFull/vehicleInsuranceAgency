/**
 * App Component
 * Estrutura principal da página
 */
import { Breadcrumbs } from '@components/bradCumps';
import { useGetImageBradCrumps } from '@components/bradCumps/hooks';
import { FallBack } from '@components/fallback';
import { Footer } from '@components/footer';
import NavigationBar from '@components/navbarPublic';
import { slides } from '@flavor/assets';
import { useChangeTitlePage } from '@hooks/useChangeTitlePage';
import { useShowDefaultLayout } from '@layouts/public/hooks/useShowDefaultLayout';
import { lazy, Suspense, useEffect } from 'react';
const HeroCarousel = lazy(() => import('@components/carousel').then(({ HeroCarousel }) => ({ default: HeroCarousel })))
const Outlet = lazy(() => import("react-router-dom").then(({ Outlet }) => ({ default: Outlet })))

export const PublicLayout = () => {
    const { titlePage } = useChangeTitlePage()
    const { show } = useShowDefaultLayout()
    const { midia } = useGetImageBradCrumps()
    useEffect(() => {
        window.document.title = titlePage
    }, [titlePage])
    return (
        <>
            <NavigationBar />
            {show ? (
                <Suspense fallback={<FallBack />}>
                    <HeroCarousel items={slides} />
                </Suspense>
            ) : <Breadcrumbs backgroundImage={midia} />}
            <Outlet />
            <Footer />
        </>
    );
};

