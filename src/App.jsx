import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Header from './components/Header/Header';

import { retrieveCourses } from './features/coursesSlice';
import { retrieveAuthors } from './features/authorsSlice';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(retrieveCourses());
		dispatch(retrieveAuthors());
	}, [dispatch]);
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='login' element={<Login />} />
				<Route path='registration' element={<Registration />} />
				<Route path='courses' element={<Courses />} />
				<Route path='courses/add' element={<CreateCourse />} />
				<Route path='courses/:courseId' element={<CourseInfo />} />
			</Routes>
		</Router>
	);
}

export default App;
