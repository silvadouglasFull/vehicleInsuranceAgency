import { Input } from "@components/forms/suhai/insuranceQuote/renderFormSection/input";
import type { TRenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection/types";
import type React from "react";
import { Card, Row } from 'react-bootstrap';

export const RenderFormSection: React.FC<TRenderFormSection> = ({ fields, title }: TRenderFormSection) => {
    return (
        <Card bg="light" className="mb-4 shadow-sm">
            <Card.Header className="bg-success text-white">
                <Card.Title className="mb-0">{title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    {fields.map(item => (
                        <Input key={item.id} {...item} />
                    ))}
                </Row>
            </Card.Body>
        </Card>
    )
}