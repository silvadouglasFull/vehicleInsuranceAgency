import type { Calculo } from "@components/accordion/suhai/rcf/types"
import type React from "react"
import { Accordion } from "react-bootstrap"

export const RFC: React.FC<Calculo> = ({ RFC }: Calculo) => {
    const { premioDanosCorporais, premioDanosMateriais, premioDanosMorais } = RFC
    return (
        <>
            <Accordion.Item eventKey="3">
                <Accordion.Header>RCF (Responsabilidade Civil Facultativa)</Accordion.Header>
                <Accordion.Body>
                    <p><strong>Materiais:</strong> R$ {premioDanosMateriais}</p>
                    <p><strong>Corporais:</strong> R$ {premioDanosCorporais}</p>
                    <p><strong>Morais:</strong> R$ {premioDanosMorais}</p>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}