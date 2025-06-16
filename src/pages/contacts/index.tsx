import { CardContacts } from '@components/cards/contacts';
import { contact } from '@flavor/links';
import type React from "react";
import { Container, Row } from "react-bootstrap";

export const Contacts: React.FC = () => {
    return (
        <>
            <Container className='mt-4 mb-5'>
                <Row className="mt-5 justify-content-between align-items-center">
                    {contact.filter(item => item.type !== 'Email').map(item => (
                        <CardContacts {...item} />
                    ))}
                </Row>
            </Container>
        </>
    )
}