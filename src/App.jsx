import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Header from './components/Header/Header';

import { retrieveCourses } from './features/coursesSlice';
import { retrieveAuthors } from './features/authorsSlice';

import PrivateRoute from './components/PrivateRouter/PrivateRouter';

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
				<Route element={<PrivateRoute />}>
					<Route path='courses/add' element={<CourseForm />} />
				</Route>
				<Route path='/' element={<Login />} />
				<Route path='login' element={<Login />} />
				<Route path='registration' element={<Registration />} />
				<Route path='courses' element={<Courses />} />
				<Route path='courses/:courseId' element={<CourseInfo />} />
			</Routes>
		</Router>
	);
}

export default App;
