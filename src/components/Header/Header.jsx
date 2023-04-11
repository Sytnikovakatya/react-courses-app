import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Logo from './components/Logo/Logo';
import LogoutButton from '../Login/LogoutButton';

export default function Header() {
	const { user: currentUser } = useSelector((state) => state.auth);
	const userData = JSON.parse(currentUser);
	return (
		<>
			<Navbar className='m-4 shadow-sm'>
				<Container>
					<Navbar.Brand href='#home'>
						<Logo />
					</Navbar.Brand>
					<Navbar.Toggle />
					{currentUser && (
						<Navbar.Collapse className='justify-content-end'>
							<Navbar.Text className='user-name me-3 fw-bold'>
								{userData.user.name}
							</Navbar.Text>
							<LogoutButton />
						</Navbar.Collapse>
					)}
				</Container>
			</Navbar>
		</>
	);
}
