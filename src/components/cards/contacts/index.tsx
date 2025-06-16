import type { Contact } from "@flavor/links/types"
import { Card, Col } from "react-bootstrap"

export const CardContacts = ({ id, text, type }: Contact) => {
    return (
        <Col key={id}>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>{type}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card >
        </Col>
    )

}