import { Logo } from '@components/logo';
import { useNavbarBackground } from "@components/navbarPublic/hooks/useNavbarBackground";
import { Links } from '@components/navbarPublic/links';
import { styles } from '@components/navbarPublic/styles';
import '@components/navbarPublic/styles/styles.css';
import { ThemesDropDown } from '@components/navbarPublic/themes';
import { themes } from '@components/navbarPublic/themes/constants';
import { Provider as ThemeProvider } from "@components/navbarPublic/themes/context/provider";
import { links } from '@flavor/links';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
    const { hasBackground } = useNavbarBackground()

    return (
        <Navbar className="fixed-top bg-sm-only"
            style={hasBackground ? styles.bgDefault : styles.bgTransparent}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand className='d-none d-md-block me-5' as={Link} to={'/'}>
                    <Logo width={'100%'} height={'100%'} />
                </Navbar.Brand>
                <Navbar.Brand className='d-block d-md-none' as={Link} to={'/'}>
                    <Logo height={'50%'} width={'60%'} />
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={`me-auto w-100 navbar-nav justify-content-between align-items-md-end ${!hasBackground ? 'mt-3' : ''}`}>
                        <Links items={links} />
                        <ThemeProvider>
                            <ThemesDropDown items={themes} />
                        </ThemeProvider>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
