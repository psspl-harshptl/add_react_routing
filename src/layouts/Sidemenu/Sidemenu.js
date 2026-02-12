import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Icon from '../../helper/icons';


const Sidemenu = () => {
    return (
        <>
            <section className='sidemenu'>
                <Navbar expand="lg">
                    <Container fluid className='flex-column h-100'>
                        <Link className="navbar-brand" to="/">
                            <img className='img-fluid' src={require('../../assets/images/logo.png')} />
                        </Link>
                        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
                        <Navbar.Offcanvas
                            id='offcanvasNavbar-expand-lg'
                            aria-labelledby='offcanvasNavbarLabel-expand-lg'
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
                                    <Link className="navbar-brand" to="/">
                                        <img className='img-fluid' src={require('../../assets/images/logo.png')} />
                                    </Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='h-100'>
                                <div className='d-flex flex-column justify-content-between'>
                                    <Nav>
                                        <Link className="nav-link" to="/joinmeeting">
                                            <span className='nav-icon'>
                                                <Icon.JoinMeeting />
                                            </span>
                                            <span className='nav-text'>Join a Meeting</span>
                                        </Link>
                                        <Link className="nav-link" to="/hostmeeting">
                                            <span className='nav-icon'>
                                                <Icon.HostMeeting />
                                            </span>
                                            <span className='nav-text'>Host a Meeting</span>
                                        </Link>
                                        <Link className="nav-link" to="/mymeeting">
                                            <span className='nav-icon'>
                                                <Icon.MyMeeting />
                                            </span>
                                            <span className='nav-text'>My Meetings</span>
                                        </Link>
                                        <Link className="nav-link" to="/poll">
                                            <span className='nav-icon'>
                                                <Icon.Poll />
                                            </span>
                                            <span className='nav-text'>Poll</span>
                                        </Link>
                                    </Nav>
                                    <Link className="nav-link" to="/poll">
                                        <span className='nav-icon'>
                                            <Icon.LogOut />
                                        </span>
                                        <span className='nav-text'>Logout</span>
                                    </Link>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </section>
        </>
    )
}

export default Sidemenu