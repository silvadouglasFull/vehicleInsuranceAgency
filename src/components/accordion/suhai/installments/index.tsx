import { Plot } from "@components/accordion/suhai/installments/plot";
import type { InstallMentsProps } from "@components/accordion/suhai/installments/types";
import type React from "react";
import { Accordion } from "react-bootstrap";

export const InstallMents: React.FC<InstallMentsProps> = ({ installments }: InstallMentsProps) => {
    return (
        <Accordion.Item eventKey="1">
            <Accordion.Header>Parcelas Individuais</Accordion.Header>
            <Accordion.Body>
                {installments.length ? installments.map(item => (
                    <Plot {...item} key={item.numberPlot} />
                )) : null}
            </Accordion.Body>
        </Accordion.Item>
    )
}