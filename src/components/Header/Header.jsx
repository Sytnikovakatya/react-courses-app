import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

const Header = () => {
	return (
		<>
			<Navbar className='m-4 shadow-sm'>
				<Container>
					<Navbar.Brand href='#home'>
						<Logo />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className='justify-content-end'>
						<Navbar.Text className='user-name me-3 fw-bold'>Dave</Navbar.Text>
						<Button text='Logout' />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
