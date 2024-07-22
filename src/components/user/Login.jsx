import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('https://fifa-11-backend-k8700ck2x-serhios-projects-ec73af3d.vercel.app', formData);
			localStorage.setItem('token', response.data.token);
			setUser(response.data.result);
			console.log('User logged in successfully');
			navigate('/user/profile');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form className='text-black' onSubmit={handleSubmit}>
			<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
			<input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
			<button className='text-white' type="submit">Login</button>
		</form>
	);
};

export default Login;
