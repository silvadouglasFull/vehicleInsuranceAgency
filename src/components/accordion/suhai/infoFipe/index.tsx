import type { InfoFipeProps } from "@components/accordion/suhai/infoFipe/types"
import type React from "react"
import { Accordion } from "react-bootstrap"
export const InfoFipe: React.FC<InfoFipeProps> = ({ fatorFipe, valorFipe, valorFipexFator }: InfoFipeProps) => {
    return (
        <>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Informações FIPE</Accordion.Header>
                <Accordion.Body>
                    <p><strong>Valor FIPE:</strong> R$ {valorFipe}</p>
                    <p><strong>Fator FIPE:</strong> {fatorFipe}%</p>
                    <p><strong>Valor x Fator:</strong> R$ {valorFipexFator}</p>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}