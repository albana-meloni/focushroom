import { useState, useEffect } from 'react';
import { Btn } from '../components/Btn';
import { Header } from '../components/Header';
import './Home.css';

export function Home() {
	const [inputFocus, setInputFocus] = useState(false);
	const [inputBreak, setInputBreak] = useState(false);
	const [inputCycles, setInputCycles] = useState(false);

	const [focusTime, setFocusTime] = useState(25);
	const [breakTime, setBreakTime] = useState(5);
	const [cycles, setCycles] = useState(4);

	const [showSuggestion, setShowSuggestion] = useState(false);

	const focushpoints = localStorage.getItem('focushpoints');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowSuggestion(true);
		}, 1000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			<section>
				<Header />
				<div className='home-info'>
					<h2 className='center'>
						Esta es tu <span>casa concentración</span>
					</h2>
				</div>
				<div className='pomodoro-chooser'>
					<div>
						<small>Tiempo focus</small>
						<Btn
							type='secondary'
							onclick={() => {
								setInputFocus(!inputFocus);
								setInputBreak(false);
								setInputCycles(false);
							}}>
							{inputFocus ? (
								<input
									type='text'
									value={focusTime}
									className='visible-input'
									onChange={(e) => setFocusTime(Number(e.target.value))}
									autoFocus
								/>
							) : (
								`${focusTime}`
							)}
							:00
						</Btn>
					</div>
					<div>
						<small>Tiempo break</small>
						<Btn
							type='secondary'
							onclick={() => {
								setInputBreak(!inputBreak);
								setInputFocus(false);
								setInputCycles(false);
							}}>
							{inputBreak ? (
								<input
									type='text'
									value={breakTime}
									className='visible-input'
									onChange={(e) => setBreakTime(Number(e.target.value))}
									autoFocus
								/>
							) : (
								`${String(breakTime).padStart(2, '0')}`
							)}
							:00
						</Btn>
					</div>
					<div>
						<small>Ciclos</small>
						<Btn
							type='secondary'
							onclick={() => {
								setInputCycles(!inputCycles);
								setInputBreak(false);
								setInputFocus(false);
							}}>
							{inputCycles ? (
								<input
									type='text'
									value={cycles}
									className='visible-input'
									onChange={(e) => setCycles(Number(e.target.value))}
									autoFocus
								/>
							) : (
								`${String(cycles).padStart(2, '0')}`
							)}
						</Btn>
					</div>
					<Btn link={`/pomodoro/${focusTime}/${breakTime}/${cycles}`}>
						Iniciar pomodoro
					</Btn>
				</div>
			</section>
			{/* <img
				className='home-background'
				src='/casa-base.png'
				alt='Fondo de la casa concentración'
			/> */}
			{!focushpoints && showSuggestion && (
				<div
					className={`suggestion-focushi ${showSuggestion ? 'show' : 'hide'}`}
					onClick={() => setShowSuggestion(false)}>
					<p className='corners'>
						Si estás 25 mins en focus, durante 4 ciclos, vas a obtener{' '}
						<strong>100 focushpoints</strong>!!!
					</p>
					<img src='/focushi-idle.png' alt='Focushi' />
				</div>
			)}
		</>
	);
}
