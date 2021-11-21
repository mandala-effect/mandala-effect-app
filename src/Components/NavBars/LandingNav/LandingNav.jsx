import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../MandalaLogo/Logo.png';
import './LandingNav.css';

export default function LandingNav() {


return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand className="navTitle">
				<img src={Logo} alt="Logo" className="navLogo"/>
				Mandala Effect
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="" className="navLink"><Link to="/">HOME</Link></Nav.Link>
					<Nav.Link href="" className="navLink"><Link to="/color">PROJECT</Link></Nav.Link>
					<Nav.Link href="" className="navLink"><Link to={{path: "https://github.com/mandala-effect/mandala-effect-app" }} target="_blank">GITHUB</Link></Nav.Link>
					<Nav.Link>
						<button className="dark-btn">🌙 </button>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}
