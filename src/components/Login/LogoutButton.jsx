import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

export default function LogoutButton() {
	const logout = () => {
		localStorage.clear();
	};

	return (
		<Link to='/login'>
			<Button text='Logout' onClick={logout} />
		</Link>
	);
}
