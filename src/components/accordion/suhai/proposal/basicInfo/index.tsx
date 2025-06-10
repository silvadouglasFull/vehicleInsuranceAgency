import type { BasicInfoProps } from "@components/accordion/suhai/proposal/basicInfo/types"
import type React from "react"
import { Accordion } from "react-bootstrap"
export const BasicInfo: React.FC<BasicInfoProps> = ({ premioLiquido, premioTotalAVista, protocolo, textoMsgRet }: BasicInfoProps) => {
    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header>Informações Básicas</Accordion.Header>
            <Accordion.Body>
                <p><strong>Protocolo:</strong> {protocolo}</p>
                <p><strong>Mensagem:</strong> {textoMsgRet}</p>
                <p><strong>Prêmio Líquido:</strong> R$ {premioLiquido}</p>
                <p><strong>Prêmio Total à Vista:</strong> R$ {premioTotalAVista}</p>
            </Accordion.Body>
        </Accordion.Item>
    )
}