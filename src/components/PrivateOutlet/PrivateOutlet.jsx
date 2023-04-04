import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function PrivateOutlet() {
	const { getItem } = useLocalStorage();

	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		if (getItem('authenticated')) {
			setUser(getItem('name'));
		} else {
			setUser(null);
			navigate('/login');
		}
	}, [getItem, navigate]);

	return user !== null && <Outlet />;
}
