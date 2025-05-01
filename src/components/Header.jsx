import { useEffect, useState } from 'react';
import { Focushi } from './Focushi';

export function Header() {
    const [points, setPoints] = useState();
	useEffect(() => {
		localStorage.getItem('mushpoints')
			? setPoints(JSON.parse(localStorage.getItem('mushpoints')))
			: setPoints(0);
	}, []);
	return (
		<header style={styles}>
			<Focushi />
			<p>{points} mushpoints</p>
		</header>
	);
}

const styles = {
	display: 'flex',
	justifyContent: 'start',
	alignItems: 'center',
	gap: '10px',
};
