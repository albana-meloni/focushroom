import './Btn.css';
import { useState } from 'react';
import { Link } from '../Link';

const audioMp3 = new Audio('/pop-sound.mp3');

export function Btn({ text, type = 'primary', link = null, onclick = null }) {
	const [sound, setSound] = useState(audioMp3);

	const handleClickDown = () => {
		setSound(audioMp3);
		sound.currentTime = 0;
		sound.play();
	};
	if (link) {
		return (
			<Link
				to={link}
				target='_blank'
				onMouseDown={handleClickDown}
				className={`corners btn btn-${type}`}>
				{text}
			</Link>
		);
	}
	if (onclick) {
		return (
			<button
				onClick={onclick}
				onMouseDown={handleClickDown}
				className={`corners btn btn-${type}`}>
				{text}
			</button>
		);
	}
	return (
		<button onMouseDown={handleClickDown} className={`corners btn btn-${type}`}>
			{text}
		</button>
	);
}
