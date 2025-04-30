import { useState } from 'react';

const focushi = {
	idle: '/focushi-idle.png',
	clicked: '/focushi-clicked.png',
};

const audioMp3 = new Audio('/pop-sound.mp3');

const CLICK_COUNT_LIMIT = 22;

export function Focushi() {
    const [sprite, setSprite] = useState('idle');
	const [sound, setSound] = useState(audioMp3);
	const [clickCount, setClickCount] = useState(1);

	const handleClickDown = () => {
		setClickCount((current) => current + 1);
		if (clickCount < CLICK_COUNT_LIMIT) {
			setSprite('clicked');
			setSound(audioMp3);
			sound.currentTime = 0;
			sound.play();
		} else if (clickCount === CLICK_COUNT_LIMIT) {
			alert("wow, wow, wow... estoy algo mareado");
			setSprite('clicked');
		}
	};
	const handleClickUp = () => {
		if (clickCount < CLICK_COUNT_LIMIT) {
			setSprite('idle');
		} else {
			setSprite('clicked');
		}
		setSound(audioMp3);
	};
	return (
		<span>
			<img
				onMouseDown={handleClickDown}
				onMouseUp={handleClickUp}
				src={focushi[sprite]}
				alt='Focushi icon'
				style={styles}
			/>
		</span>
	);
}

const styles = {
	width: '50px',
	height: '50px',
	cursor: 'pointer',
};
