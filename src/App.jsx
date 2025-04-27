/* import { useEffect, useState } from 'react'; */
/* import viteLogo from '/vite.svg'; */
import './App.css';
import { Focushi } from './components/Focushi';
import { Btn } from './components/Btn';

function App() {
	return (
		<>
			<main>
				<div className='flex-column'>
					<Focushi />
					<h1>Focushroom</h1>
					<p>Crecé mientras te concentras</p>
				</div>
				<div className='flex-column'>
					<Btn text={'Iniciar sesión'}></Btn>
					<Btn text={'Registrarme'} type='secondary'></Btn>
				</div>
				<small>Albana Creative Studio © 2025</small>
			</main>
		</>
	);
}

export default App;
