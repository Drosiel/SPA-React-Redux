import React, { useEffect, useState } from 'react';

export const Home = () => {
	const [login, setLogin] = useState('гость');

	return (
		<div>
			<span>Привет, {login}</span>
		</div>
	);
};

export default Home;
