import { Card } from "@components/cards/servicesCards/card/";
import type { ServiceCardsProps } from "@components/cards/servicesCards/types";
import type React from "react";
import { Container, Row } from 'react-bootstrap';
const ServicesCards: React.FC<ServiceCardsProps> = ({ items }: ServiceCardsProps) => {
    return (
        <section className="py-5 bg-light">
            <Container>
                <Row className="g-4 justify-content-center flex-wrap">
                    {items.length ? items.map(item => (
                        <Card key={item.id} {...item} />
                    )) : null}
                </Row>
            </Container>
        </section>
    );
};

export default ServicesCards;
