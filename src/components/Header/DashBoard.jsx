import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Logo from './components/Logo/Logo';
import LogoutButton from '../Login/LogoutButton';

export default function Header() {
	return (
		<>
			<Navbar className='m-4 shadow-sm'>
				<Container>
					<Navbar.Brand href='#home'>
						<Logo />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className='justify-content-end'>
						<Navbar.Text className='user-name me-3 fw-bold'>
							{localStorage.getItem('name')}
						</Navbar.Text>
						<LogoutButton />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
