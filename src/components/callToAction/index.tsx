/**
 * CallToAction Component
 * Faixa de chamada para ação usando React Bootstrap
 */
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/cotacao')
    }
    return (
        <section className="bg-info text-dark py-5 text-center">
            <Container>
                <h2 className="fw-bold text-light">Faça sua cotação agora mesmo!</h2>
                <Button variant="dark" onClick={handleClick} className="mt-3">
                    Fazer Cotação
                </Button>
            </Container>
        </section>
    );
};

export default CallToAction;
