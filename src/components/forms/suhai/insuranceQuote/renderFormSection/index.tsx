import { Input } from "@components/forms/suhai/insuranceQuote/renderFormSection/input";
import type { TRenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection/types";
import { useVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useVehicleData";
import { Spinner } from "@components/spinner";
import type React from "react";
import { Card, Row } from 'react-bootstrap';

export const RenderFormSection: React.FC<TRenderFormSection> = ({ fields, title }: TRenderFormSection) => {
    const { loading, items } = useVehicleData()
    return (
        <Card bg="light" className="mb-4 shadow-sm">
            <Card.Header className="bg-success text-white">
                <Card.Title className="mb-0">{title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    {loading && <Spinner />}
                </Row>
                <Row>
                    {fields.map(item => (
                        <Input key={item.id} options={Array.isArray(items) && items.length === 0 ? [] : undefined} {...item} />
                    ))}
                </Row>
            </Card.Body>
        </Card>
    )
}