import type { Calculo } from "@components/accordion/suhai/coveragePlans/types";
import type React from "react";
import { Accordion } from "react-bootstrap";
import { Coverage } from "./coverage";
export const CovaragePlans: React.FC<Calculo> = ({ PremioCoberturas }: Calculo) => {
    const { Cobertura } = PremioCoberturas
    return (
        <>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Planos de Cobertura</Accordion.Header>
                <Accordion.Body>
                    {Cobertura.length ? Cobertura.map(item => (
                        <Coverage {...item} id={item.id} />
                    )) : null}
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}