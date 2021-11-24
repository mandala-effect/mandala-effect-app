import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../MandalaLogo/Logo.png';
import './LandingNav.css';

export default function LandingNav() {
	const [darkMode, setDarkMode] = useState(false);
	const [emoji, setEmoji] = useState(true);

	useEffect(() => {
		const json = localStorage.getItem("site-dark-mode");
		const currentMode = JSON.parse(json);
		if (currentMode) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
		const json = JSON.stringify(darkMode);
		localStorage.setItem("site-dark-mode", json);
	}, [darkMode]);

return (
		<Navbar bg="transparent" variant="transparent">
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
						<button className="dark-btn" 
						onClick={() => {setEmoji(!emoji); setDarkMode(!darkMode)}}>
								{ emoji ? "🌙  " : " ☀️  " }	
						</button>
							{emoji}
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}
