import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../common/Button/Button';
import { Link } from 'react-router-dom';

import { logout } from '../../../state/authenticationSlice';

export default function LogoutButton() {
	const dispatch = useDispatch();

	const { token } = useSelector((state) => state.user);

	const logOut = useCallback(() => {
		dispatch(logout(token));
		window.location.reload();
	}, [dispatch, token]);

	return (
		<Link to='/login'>
			<Button text='Logout' type='button' onClick={logOut} />
		</Link>
	);
}
