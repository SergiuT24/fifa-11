import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('https://fifa-11-backend.vercel.app/api/auth/registration', formData, {
				headers: {
					'Content-Type': 'application/json'
				}
			});
			localStorage.setItem('token', response.data.token);
			console.log('User registered successfully');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form className='text-black' onSubmit={handleSubmit}>
			<input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
			<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
			<input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
			<button className='text-white' type="submit">Register</button>
		</form>
	);
};

export default Register;
