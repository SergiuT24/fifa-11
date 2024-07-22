import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			const token = localStorage.getItem('token');
			if (token) {
				try {
					const response = await axios.get('https://fifa-11-backend.vercel.app/api/auth/profile', {
						headers: {
							'Authorization': `Bearer ${token}`
						}
					});
					setUser(response.data);
				} catch (error) {
					console.error('Error fetching user data', error);
				}
			}
		};

		fetchUser();
	}, []);

	if (!user) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Profile</h1>
			<p>Username: {user.username}</p>
			<p>Email: {user.email}</p>
		</div>
	);
};

export default Profile;
