import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Logo from './components/Logo/Logo';

export default function Header() {
	return (
		<>
			<Navbar className='m-4 shadow-sm'>
				<Container>
					<Navbar.Brand href='#home'>
						<Logo />
					</Navbar.Brand>
					<Navbar.Toggle />
				</Container>
			</Navbar>
		</>
	);
}
