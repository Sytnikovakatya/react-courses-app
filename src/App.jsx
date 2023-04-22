import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Header from './components/Header/Header';

import { retrieveCourses } from './state/coursesSlice';
import { retrieveAuthors } from './state/authorsSlice';

import PrivateRoute from './components/PrivateRouter/PrivateRouter';

function App() {
	const dispatch = useDispatch();

	const { role } = useSelector((state) => state.user);
	const { isLoggedIn } = useSelector((state) => state.user);
	const admin = role === 'admin';

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
				<Route element={<PrivateRoute user={admin} redirectPath={'courses'} />}>
					<Route path='courses/add' element={<CourseForm />} />
					<Route path='courses/update/:courseId' element={<CourseForm />} />
				</Route>
				<Route
					element={<PrivateRoute user={isLoggedIn} redirectPath={'login'} />}
				>
					<Route path='courses' element={<Courses />} />
					<Route path='courses/:courseId' element={<CourseInfo />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
