import { useState, useEffect, useRef } from 'react';
import { Btn } from '../components/Btn';
import { ProgressBar } from '../components/ProgressBar';
import { Focushi } from '../components/Focushi';

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
	const [progressFocus, setProgressFocus] = useState(100);
	const [progressBreak, setProgressBreak] = useState(100);

	const audioChangeRef = useRef(new Audio('/change-state.mp3'));
	const audioBreakRef = useRef(new Audio('/break-music.mp3'));

	const prevFocushpoints = JSON.parse(localStorage.getItem('focushpoints'));

	useEffect(() => {
		if (!isRunning) return;

		const interval = setInterval(() => {
			currentState
				? setProgressFocus(String(((minutes * 60 + seconds) * 100) / (focusTime * 60)))
				: setProgressBreak(String(((minutes * 60 + seconds) * 100) / (breakTime * 60)));
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
						localStorage.setItem(
							'focushpoints',
							JSON.stringify(prevFocushpoints + focusTime * cycles)
						);
						window.location.href = `/pomodoro/finish/${focusTime * cycles}`;
						return;
					}
					!currentState && setCurrentCycle((c) => c + 1);
					setCurrentState((prev) => {
						setMinutes(prev ? breakTime : focusTime);
						setSeconds(0);
						return !prev;
					});
				}
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [
		isRunning,
		seconds,
		minutes,
		focusTime,
		breakTime,
		cycles,
		currentCycle,
		currentState,
		prevFocushpoints,
	]);

	useEffect(() => {
		const audio = audioChangeRef.current;
		if (!isRunning) return;
		if (minutes === 0 && seconds === 0) {
			audio.currentTime = 0;
			audio.volume = 0.5;
			audio.play();
		}
	}, [isRunning, minutes, seconds]);

	useEffect(() => {
		const audio = audioBreakRef.current;
		if (!isRunning || currentState) {
			audio.pause();
			return;
		}
		audio.loop = true;
		audio.play();
	}, [currentState, isRunning]);

	return (
		<>
			<div className='flex-column'>
				<Focushi />
				<h1>Focushroom</h1>
				<p>— {currentState ? 'Tiempo de enfoque' : 'Tiempo de descanso'} —</p>
			</div>
			<div className='center'>
				<p>Vuelta {currentCycle}/{cycles}</p>
				<p style={styles.timer}>
					{txtMinutes}:{txtSeconds}
				</p>
			</div>
			<ProgressBar progress={currentState ? progressFocus : progressBreak} />
			<Btn onclick={() => setIsRunning(!isRunning)}>{isRunning ? 'Pausar' : 'Iniciar'}</Btn>
		</>
	);
}

const styles = {
	timer: {
		fontSize: 'calc(var(--fs-xl) * 2.3)',
		fontWeight: 'bold',
		color: 'var(--primary)',
	},
};
