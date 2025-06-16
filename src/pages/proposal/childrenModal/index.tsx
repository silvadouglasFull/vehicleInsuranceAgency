import type { ChildrenModalProps } from "@pages/proposal/childrenModal/types";
import type React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export const ChildrenModal: React.FC<ChildrenModalProps> = ({ proposta, protocolo, handleCloseModal }: ChildrenModalProps) => {
    return (
        <Container>
            <Card.Title className="text-info">
                Sua proposta foi enviada com Sucesso, anote o número do protoculo e o número da proposta:
            </Card.Title>
            <Row>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary font-weight-bold">
                            Protocolo:
                        </strong>
                        {protocolo}
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary font-weight-bold">
                            Proposta:
                        </strong>
                        {proposta}
                    </Card.Text>
                </Col>
            </Row>
            <div className="d-grid gap-2 w-100">
                <Button variant="info" className="w-100" size="lg" onClick={handleCloseModal}>
                    Entendi! Fechar essa janela
                </Button>
            </div>
        </Container>
    )
}