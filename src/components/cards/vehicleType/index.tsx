import { options } from "@components/cards/vehicleType/constants";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/vehicleData/context/hooks/insuranceQuote";
import { Icon } from "@components/icons";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export const VehicleTypeCards: React.FC = () => {
    const { handleForm, state } = useInsuranceQuote()
    const { categoria } = state
    const onClick = (label: string) => {
        if (label === categoria) {
            return handleForm({
                categoria: ''
            })
        }
        handleForm({
            categoria: label
        })
    }
    return (
        <Row className="g-4 mb-4">
            {options.map(({ label, icon }) => (
                <Col xs={12} md={4} key={label} style={{
                    cursor: 'pointer'
                }}>
                    <Card className={`text-center shadow-sm h-100 ${categoria === label ? 'border border-info' : ''}`} onClick={() => onClick(label)}>
                        <Card.Body>
                            <Icon name={icon} />
                            <Card.Title className="fw-bold">{label}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};
