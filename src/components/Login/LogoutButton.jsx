import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function LogoutButton() {
	const { removeItem } = useLocalStorage();
	const logout = () => {
		removeItem();
	};
	return (
		<Link to='/login'>
			<Button text='Logout' onClick={logout} />
		</Link>
	);
}
