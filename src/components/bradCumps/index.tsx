import { styles, stylesDesktop, stylesLargeDesktop } from "@components/bradCumps/styles";
import { Title } from "@components/bradCumps/title";
import { useGetNamePage } from '@components/bradCumps/title/hooks/useGetNamePage';
import type { BreadcrumbsProps } from '@components/bradCumps/types';
import React from "react";
import { Container } from "react-bootstrap";
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ backgroundImage, className, ...props }: BreadcrumbsProps) => {
    const { namePage } = useGetNamePage()
    return (
        <>
            <section style={{
                ...styles.section,
                background: `url(${backgroundImage}) center center/cover no-repeat`,

            }} {...props} className={`w-100 ${className} d-flex d-md-none`}>
                <Container>
                    <Title style={{
                        position: 'absolute',
                        bottom: '15%',
                    }} title={namePage} />
                </Container>
            </section>
            <section style={{
                ...stylesDesktop.section,
                background: `url(${backgroundImage}) center center/cover no-repeat`,

            }} {...props} className={`w-100 ${className} d-none d-md-flex d-lg-none`}>
                <Container>
                    <Title style={{
                        position: 'absolute',
                        top: '20%',
                    }} title={namePage} />
                </Container>
            </section>
            <section style={{
                ...stylesLargeDesktop.section,
                background: `url(${backgroundImage}) center center/cover no-repeat`,

            }} {...props} className={`w-100 ${className} d-none d-md-none d-lg-flex`}>
                <Container>
                    <Title style={{
                        position: 'absolute',
                        top: '30%',
                    }} title={namePage} />
                </Container>
            </section>
        </>
    )
}