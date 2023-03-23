import React from 'react';
import { Button } from 'react-bootstrap';

const MainButton = ({ text, onClick, type }) => (
	<Button onClick={onClick} variant='outline-dark' type={type} className='me-3'>
		{text}
	</Button>
);
export default MainButton;
