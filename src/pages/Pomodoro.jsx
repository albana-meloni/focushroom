import { useState, useEffect } from 'react';

export function Pomodoro({ routeParams }) {
	const focusTime = Number(routeParams.focusTime);
	const breakTime = Number(routeParams.breakTime);
	let cycles = Number(routeParams.cycles);

	const [currentState, setCurrentState] = useState('focus');

	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(10);

	const txtMinutes = String(minutes).padStart(2, '0');
	const txtSeconds = String(seconds).padStart(2, '0');

	useEffect(() => {
		let interval = setInterval(() => {
			for (let i = 1; i < cycles; i++) {
				clearInterval(interval);
				if (seconds === 0) {
					if (minutes !== 0) {
						setSeconds(59);
						setMinutes(minutes - 1);
					} else if (minutes === 0) {
						setMinutes(breakTime);
						setSeconds(0);
						setCurrentState('break');
						cycles--;
					}
				} else {
					setSeconds(seconds - 1);
				}
			}
		}, 1000);
	}, [seconds]);
	return (
		<>
			<div>
				<h1>Pomodoro</h1>
				<p>{currentState}</p>
				<p>ciclo: {1}</p>
				<h1>
					{txtMinutes}:{txtSeconds}
				</h1>
			</div>
		</>
	);
}
