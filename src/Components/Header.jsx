import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

export default function Header() {
    const location = useLocation();
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">MiniBlog</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                        {location.pathname === '/create-post' && (
                            <Navbar.Text>
                                <Link className='toHome' to="/dashboard">Home</Link>
                            </Navbar.Text>
                        )}
                        {location.pathname === '/dashboard' && (
                            <>
                            <Navbar.Text>
                                <Link className='toHome' to="/dashboard">Home</Link>
                            </Navbar.Text>
                                <Navbar.Text>
                                <Link className='toLogOut' to="/">Logout</Link>
                            </Navbar.Text>
                            </>
                        )}
                        {location.pathname === '/' && (
                            <Navbar.Text>
                                <Link className='toHome' to="/">Login</Link>
                            </Navbar.Text>
                        )}
                        {location.pathname === '/register' && (
                            <Navbar.Text>
                                <Link className='register' to="/">Register</Link>
                            </Navbar.Text>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
