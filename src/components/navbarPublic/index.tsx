/**
 * Navbar Component
 * Menu superior utilizando React Bootstrap
 */
import { Logo } from '@components/logo';
import { useNavbarBackground } from "@components/navbarPublic/hooks/useNavbarBackground";
import { Links } from '@components/navbarPublic/links';
import { styles } from '@components/navbarPublic/styles';
import '@components/navbarPublic/styles/styles.css';
import { links } from '@flavor/links';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const { hasBackground } = useNavbarBackground()

    return (
        <Navbar className="fixed-top bg-sm-only"
            style={hasBackground ? styles.bgDefault : styles.bgTransparent}>
            <Container>
                <Navbar.Brand className='d-none d-md-block' as={Link} to={'/'}>
                    <Logo />
                </Navbar.Brand>
                <Navbar.Brand className='d-block d-md-none' as={Link} to={'/'}>
                    <Logo height={'50%'} width={'60%'} />
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Links items={links} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
