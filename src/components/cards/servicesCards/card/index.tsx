import type { CardProps } from "@components/cards/servicesCards/card/types";
import type React from "react";
import { Card as CardBootstrap, Col } from "react-bootstrap";

export const Card: React.FC<CardProps> = ({ text, title, image }: CardProps) => {
    return (
        <Col md={4}>
            <CardBootstrap className="shadow-sm text-center" style={{
                width: '18rem',
                height: '21.875rem'
            }}>
                {image ? (
                    <CardBootstrap.Img src={image} />
                ) : null}
                <CardBootstrap.Body>
                    <CardBootstrap.Title className="fw-bold">{title}</CardBootstrap.Title>
                    <CardBootstrap.Text>{text}</CardBootstrap.Text>
                </CardBootstrap.Body>
            </CardBootstrap>
        </Col>
    );
}