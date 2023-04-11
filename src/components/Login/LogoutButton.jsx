import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

import { logout } from '../../features/authSlice';

export default function LogoutButton() {
	const dispatch = useDispatch();
	const logOut = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);
	return (
		<Link to='/login'>
			<Button text='Logout' onClick={logOut} />
		</Link>
	);
}
