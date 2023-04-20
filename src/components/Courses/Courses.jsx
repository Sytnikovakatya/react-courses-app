import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SearchBar from './components/SearchBar/SearchBar';
import List from './components/List/List';

export default function Courses() {
	const [searchBarInputValue, setSearchBarInputValue] = useState('');

	const { token: currentUser } = useSelector((state) => state.user);

	const searchItems = (event) => {
		event.preventDefault();
		let searchValue = event.target.value;
		setSearchBarInputValue(searchValue);
	};

	if (!currentUser) {
		return <Navigate to='/login' />;
	} else {
		return (
			<>
				<SearchBar searchItems={searchItems} />
				<List searchBarInputValue={searchBarInputValue} />
			</>
		);
	}
}
