import React from 'react';
import { Button } from 'react-bootstrap';

const MainButton = ({ text, onClick }) => (
	<Button onClick={onClick} variant='outline-dark'>
		{text}
	</Button>
);
export default MainButton;
