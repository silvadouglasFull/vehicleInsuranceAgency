/* eslint-disable react-hooks/exhaustive-deps */
/**
 * App Component
 * Estrutura principal da página
 */
import { Breadcrumbs } from '@components/bradCumps';
import { useGetImageBradCrumps } from '@components/bradCumps/hooks';
import { FallBack } from '@components/fallback';
import { Footer } from '@components/footer';
import NavigationBar from '@components/navbarPublic';
import ModalPrivaciPolicy from '@components/privacyPolicy/modal';
import { useDefinesAsSeenByTheVisitor } from '@components/privacyPolicy/modal/hooks/useDefinesAsSeenByTheVisitor';
import { useShowModal } from '@components/privacyPolicy/modal/hooks/useShowModal';
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
    const { handleClose, handleShow, show: showModal } = useShowModal()
    const { seen } = useDefinesAsSeenByTheVisitor({ showModal })
    useEffect(() => {
        if (!seen) handleShow()
        else handleClose()
    }, [seen])
    useEffect(() => {
        window.document.title = titlePage
    }, [titlePage])
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', left: 0, top: 0 })
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
            <ModalPrivaciPolicy
                onHide={handleClose}
                show={showModal}
                title='Politica de Privacidade'
            />
        </>
    );
};

