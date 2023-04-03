import React, { useState, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import { mockedAuthorsList, mockedCoursesList } from '../../helpers/mockedData';
import SearchBar from './components/SearchBar/SearchBar';
import List from './components/List/List';
import DashBoard from '../Header/DashBoard';

import { useLocation } from 'react-router-dom';

export default function Courses() {
	const [courseList, setCourseList] = useState(mockedCoursesList);
	const [searchBarInputValue, setSearchBarInputValue] = useState('');
	const [totalAuthorList, setTotalAuthorList] = useState(mockedAuthorsList);
	const location = useLocation();
	useEffect(() => {
		if (location.state !== null) {
			const { courseModel, authorCourseList } = location.state;
			setCourseList((prevState) => [...prevState, courseModel]);
			const newAuthors = authorCourseList.filter((newAuthor) =>
				totalAuthorList.every((author) => author.id !== newAuthor.id)
			);
			for (let i = 0; i < newAuthors.length; i++) {
				setTotalAuthorList((prevState) => [...prevState, newAuthors[i]]);
			}
		}
	}, []);

	const searchItems = (event) => {
		event.preventDefault();
		let searchValue = event.target.value;
		setSearchBarInputValue(searchValue);
	};

	const filtredResult = courseList.filter((item) => {
		return Object.values(item)
			.join('')
			.toLowerCase()
			.includes(searchBarInputValue.toLowerCase());
	});

	if (!localStorage.getItem('authenticated')) {
		return <Navigate replace to='/login' />;
	} else {
		return (
			<>
				<div>
					<>
						<DashBoard />
						<SearchBar searchItems={searchItems} />
						<List
							courses={filtredResult}
							totalAuthorList={totalAuthorList}
							courseList={courseList}
						/>
					</>
				</div>
			</>
		);
	}
}
