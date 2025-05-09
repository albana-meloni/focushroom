import { Focushi } from '../components/Focushi';
import { Btn } from '../components/Btn';

export function Finish({ routeParams }) {
    const focushpoints = Number(routeParams.focushpoints);
	return (
		<>
			<div className='flex-column'>
				<Focushi />
				<h1 className='center' style={{ fontSize: '2em' }}>
					¡Felicitaciones, lo lograste!
				</h1>
				<p className='center'>
					Por haberte concentrado tanto... con esta sesión de pomodoro obtuviste:{' '}
					<strong>{focushpoints} focushpoints</strong>
				</p>
			</div>
			<p className='center'>
				No te olvides que con Focushroom: creces mientras te concentras :)
			</p>
			<Btn link='/home'>Volver al inicio</Btn>
		</>
	);
}
