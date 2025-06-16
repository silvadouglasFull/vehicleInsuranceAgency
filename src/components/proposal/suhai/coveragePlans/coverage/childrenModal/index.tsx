import type { ChildrenModalProps } from "@components/proposal/suhai/coveragePlans/coverage/childrenModal/types"
import { Plot } from "@components/proposal/suhai/coveragePlans/coverage/plot"
import type React from "react"
import { Card } from "react-bootstrap"

export const ChildrenModal: React.FC<ChildrenModalProps> = ({ Parcela }: ChildrenModalProps) => {
    if (Parcela.length) {
        return Parcela.map(item => (
            <Plot key={item.quantidade} {...item} />
        ))
    }
    return <Card.Text>Não há parcelas para serem exibidas</Card.Text>
}