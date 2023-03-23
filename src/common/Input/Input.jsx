import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Input({
	labelText,
	placeholderText,
	onChange,
	nameInput,
	id,
}) {
	return (
		<>
			<Form.Control
				placeholder={placeholderText}
				type={labelText}
				onChange={onChange}
				name={nameInput}
				id={id}
			/>
		</>
	);
}
