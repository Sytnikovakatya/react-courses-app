//Цей хук дозволить нам легко зберігати та отримувати дані з localStorage.
import { useState } from 'react';

export function useLocalStorage() {
	const [value, setValue] = useState('');

	const setItem = (key, value) => {
		localStorage.setItem(key, value);
		setValue(value);
	};

	const getItem = (key) => {
		const value = localStorage.getItem(key);
		setValue(value);
		return value;
	};

	const removeItem = () => {
		localStorage.clear();
		setValue(null);
	};

	return { value, setItem, getItem, removeItem };
}
