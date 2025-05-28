import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav } from 'react-bootstrap'

function NavigationBar(props){
    return(
        <div>
        <Container>
            <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='#home'>{props.caption}</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse>
                <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#about'>About</Nav.Link>
                <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
            </Navbar>
        </Container>
    </div>
    )
}
export default NavigationBar