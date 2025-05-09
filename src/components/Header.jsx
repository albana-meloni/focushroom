import { useEffect, useState } from 'react';
import { Focushi } from './Focushi';

export function Header() {
	const [points, setPoints] = useState();
	useEffect(() => {
		localStorage.getItem('focushpoints')
			? setPoints(JSON.parse(localStorage.getItem('focushpoints')))
			: setPoints(0);
	}, []);
	return (
		<header style={styles}>
			<Focushi />
			<p>{points} focushpoints</p>
		</header>
	);
}

const styles = {
	display: 'flex',
	justifyContent: 'start',
	alignItems: 'center',
	gap: '10px',
};
