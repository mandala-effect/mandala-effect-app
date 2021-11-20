import React from 'react'
// import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../../../Images/Logo/Logo.png';
import './LandingNav.css';

export default function LandingNav() {
return (
		<Navbar bg="light" variant="light">
			<Container>
			<Navbar.Brand className="navTitle"><img src={Logo} alt="Logo" className="navLogo"/> Mandala Effect</Navbar.Brand>
			<Nav className="me-auto">
			<Nav.Link href="#home" className="navLink">HOME</Nav.Link>
			<Nav.Link href="#features" className="navLink">PROJECT</Nav.Link>
			<Nav.Link href="#pricing" className="navLink">GITHUB</Nav.Link>
			<Nav.Link><button className="dark-btn">🌙 </button></Nav.Link>
			</Nav>
			</Container>
		</Navbar>
	);
}


