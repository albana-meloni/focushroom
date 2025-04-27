/* import { useEffect, useState } from 'react'; */
/* import viteLogo from '/vite.svg'; */
import './App.css';
import { Focushi } from './components/Focushi';

function App() {
	return (
		<>
			<main>
				<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<Focushi />
					<h1>Focushroom</h1>
					<p>Crecé mientras te concentras</p>
				</div>
				<div></div>
				<small>Albana Creative Studio © 2025</small>
			</main>
		</>
	);
}

export default App;
