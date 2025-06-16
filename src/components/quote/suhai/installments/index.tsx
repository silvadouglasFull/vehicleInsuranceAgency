import { Plot } from "@components/quote/suhai/installments/plot";
import type { InstallMentsProps } from "@components/quote/suhai/installments/types";
import type React from "react";
import { Card, Container, Row } from "react-bootstrap";

export const InstallMents: React.FC<InstallMentsProps> = ({ installments }: InstallMentsProps) => {
    return (
        <Container className="mt-5">
            <Card.Title className="text-info">Parcelas Individuais</Card.Title>
            <Row>
                {installments.length ? installments.map(item => (
                    <Plot {...item} key={item.numberPlot} />
                )) : null}
            </Row>
        </Container>
    )
}