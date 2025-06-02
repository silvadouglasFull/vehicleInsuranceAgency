/**
 * CallToAction Component
 * Faixa de chamada para ação usando React Bootstrap
 */
import { Button, Container } from 'react-bootstrap';

const CallToAction = () => {
    return (
        <section className="bg-success text-dark py-5 text-center">
            <Container>
                <h2 className="fw-bold">Faça sua cotação agora mesmo!</h2>
                <Button variant="dark" href="#cotacao" className="mt-3">
                    Fazer Cotação
                </Button>
            </Container>
        </section>
    );
};

export default CallToAction;
