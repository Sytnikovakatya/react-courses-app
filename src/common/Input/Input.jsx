import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Input({
	labelText,
	placeholder,
	onChange,
	nameInput,
	id,
	isInvalid,
	onInput,
	value,
}) {
	return (
		<>
			<Form.Control
				placeholder={placeholder}
				type={labelText}
				onChange={onChange}
				name={nameInput}
				id={id}
				isInvalid={isInvalid}
				onInput={onInput}
				value={value}
			/>
		</>
	);
}
