import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute({ user, redirectPath }) {
	if (!user) {
		return <Navigate to={redirectPath} replace />;
	}
	return <Outlet />;
}
