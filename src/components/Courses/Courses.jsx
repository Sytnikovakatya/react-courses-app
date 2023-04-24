import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './components/SearchBar/SearchBar';
import List from './components/List/List';
import { getUserRole } from '../../state/authenticationSlice';

export default function Courses() {
	const dispatch = useDispatch();

	const [searchBarInputValue, setSearchBarInputValue] = useState('');

	const { token } = useSelector((state) => state.user);

	const searchItems = (event) => {
		event.preventDefault();
		let searchValue = event.target.value;
		setSearchBarInputValue(searchValue);
	};

	useEffect(() => {
		dispatch(getUserRole(token));
	});

	return (
		<>
			<SearchBar searchItems={searchItems} />
			<List searchBarInputValue={searchBarInputValue} />
		</>
	);
}
