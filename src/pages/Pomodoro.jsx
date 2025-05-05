import { useState, useEffect } from 'react';
import { Btn } from '../components/Btn';

export function Pomodoro({ routeParams }) {
	const focusTime = Number(routeParams.focusTime);
	const breakTime = Number(routeParams.breakTime);
	const cycles = Number(routeParams.cycles);

	const [minutes, setMinutes] = useState(focusTime);
	const [seconds, setSeconds] = useState(0);
	const [currentCycle, setCurrentCycle] = useState(1);
	const [currentState, setCurrentState] = useState(true); /* true: focus / false: break */
	const [isRunning, setIsRunning] = useState(true);

	const txtMinutes = String(minutes).padStart(2, '0');
	const txtSeconds = String(seconds).padStart(2, '0');

	useEffect(() => {
		if (!isRunning) return;

		const interval = setInterval(() => {
			if (seconds > 0) {
				setSeconds((s) => s - 1);
			} else {
				if (minutes > 0) {
					setMinutes((m) => m - 1);
					setSeconds(59);
				} else if (minutes === 0) {
					if (currentState && currentCycle === cycles) {
						setIsRunning(!isRunning);
						clearInterval(interval);
						/* finalizó el pomodoro */
						return;
					}
					!currentState && setCurrentCycle((c) => c + 1);
					setCurrentState((prev) => {
						const isBreak = !prev;
						setMinutes(isBreak ? breakTime : focusTime);
						setSeconds(0);
						return isBreak;
					});
				}
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [isRunning, seconds, minutes, focusTime, breakTime, cycles, currentCycle, currentState]);
	return (
		<>
			<div>
				<h1>Pomodoro</h1>
				<p>{currentState ? 'focus' : 'break'}</p>
				<p>ciclo: {currentCycle}</p>
				<h1>
					{txtMinutes}:{txtSeconds}
				</h1>
				<Btn onclick={() => setIsRunning(!isRunning)}>
					{isRunning ? 'Pausar pomodoro' : 'Iniciar pomodoro'}
				</Btn>
				
			</div>
		</>
	);
}
