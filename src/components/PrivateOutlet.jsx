import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function PrivateOutlet() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem('authenticated')) {
			setUser(localStorage.getItem('name'));
		} else {
			setUser(null);
			navigate('/login');
		}
	}, [navigate]);

	return user !== null && <Outlet />;
}
