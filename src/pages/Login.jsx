import { Focushi } from '../components/Focushi';
import { Btn } from '../components/Btn';
import { Link } from '../Link';

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
				<Btn text='Iniciar sesión' link='/home'></Btn>
				<Btn text='Registrarme' type='secondary'></Btn>
			</div>
			<small>Albana Creative Studio © {currentYear}</small>
		</>
	);
}
