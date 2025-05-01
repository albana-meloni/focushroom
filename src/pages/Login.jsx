import { Focushi } from '../components/Focushi';
import { Btn } from '../components/Btn';

export function Login() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<div className='flex-column'>
				<Focushi />
				<h1>Focushroom</h1>
				<p>Crecé mientras te concentras</p>
			</div>
			<div className='flex-column'>
				<Btn link='/home'>Iniciar</Btn>
			</div>
			<small>Albana Creative Studio © {currentYear}</small>
		</>
	);
}
