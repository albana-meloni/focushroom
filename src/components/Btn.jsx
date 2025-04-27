import './Btn.css';
import { useState } from 'react';

const audioMp3 = new Audio('/pop-sound.mp3');

export function Btn({ text, type = 'primary' }) {
	const [sound, setSound] = useState(audioMp3);

	const handleClickDown = () => {
		setSound(audioMp3);
		sound.currentTime = 0;
		sound.play();
	};
	return (
		<button onMouseDown={handleClickDown} className={`corners btn btn-${type}`}>
			{text}
		</button>
	);
}
