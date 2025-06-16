import { Icon } from "@components/icons"
import type { BasicInfoProps } from "@components/quote/suhai/proposal/basicInfo/types"
import type React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
export const BasicInfo: React.FC<BasicInfoProps> = ({ premioLiquido, premioTotalAVista, protocolo }: BasicInfoProps) => {
    return (
        <Container>
            <Card.Title className="text-success">Informações Básicas</Card.Title>
            <Row>
                <Col sm={12} md={4}>
                    <Card.Text>
                        <strong className="text-secondary">Protocolo:</strong> {protocolo}
                    </Card.Text>
                </Col>
                <Col sm={12} md={4}>
                    <Card.Text>
                        <strong className="text-secondary"> <Icon name="fa-solid fa-trophy text-success" />  Retorno do valor liquido do seguro:</strong> <span className="text-success">R$ {premioLiquido}</span>
                    </Card.Text>
                </Col>
                <Col sm={12} md={4}>
                    <Card.Text>
                        <strong className="text-secondary"> <Icon name="fa-solid fa-trophy text-success" />  Retorno do valor total do seguro:</strong> <span className="text-success">R$ {premioTotalAVista}</span>
                    </Card.Text>
                </Col>
            </Row>
        </Container>
    )
}