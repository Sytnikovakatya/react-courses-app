import React from 'react';
import { Button } from 'react-bootstrap';

export default function MainButton({ text, onClick, type }) {
	return (
		<Button
			onClick={onClick}
			type={type}
			className='me-3'
			variant='outline-dark'
		>
			{text}
		</Button>
	);
}
