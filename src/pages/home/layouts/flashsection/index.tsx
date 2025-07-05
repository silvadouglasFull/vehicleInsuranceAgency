import { flashSection } from "@flavor/flashSection"
import { Card, Col, Container, Image, Row } from "react-bootstrap"

export const FlashSection = () => {
    return (
        <Container className="mt-3 p-3">
            <Card className="border border-0 mb-3">
                <Card.Title>
                    Benefícios de se ter um Seguro
                </Card.Title>
            </Card>
            {flashSection.map(item => (
                <Card key={item.id} className="border border-0 mb-4">
                    <Card.Body>
                        <Row className="d-flex aligin-items-center">
                            {(item.id % 2 === 0) ? (
                                <>
                                    <Col sm={12} md={6}>
                                        <Image className="w-100 rounded rounded-4" fluid src={item.midia} />
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Card.Title className="w-100">{item.title}</Card.Title>
                                        {item.paragraph.map(paragraph => (
                                            <Card.Text key={paragraph.id}>
                                                {paragraph.text}
                                            </Card.Text>
                                        ))}
                                    </Col>
                                </>
                            ) : (
                                <>
                                    <Col sm={12} md={6}>
                                        <Card.Title className="w-100">{item.title}</Card.Title>
                                        {item.paragraph.map(paragraph => (
                                            <Card.Text key={paragraph.id}>
                                                {paragraph.text}
                                            </Card.Text>
                                        ))}
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Image className="w-100 rounded rounded-4" fluid src={item.midia} />
                                    </Col>
                                </>
                            )}
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    )
}