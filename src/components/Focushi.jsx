import { useState } from 'react';

const focushi = {
	idle: '/focushi-idle.png',
	clicked: '/focushi-clicked.png',
};

const audioMp3 = new Audio('/pop-sound.mp3');

export function Focushi() {
    const [sprite, setSprite] = useState('idle');
    const [sound, setSound] = useState(audioMp3);

	const handleClickDown = () => {
		setSprite('clicked');
        setSound(audioMp3);
        sound.currentTime = 0;
        sound.play();
	};
	const handleClickUp = () => {
		setSprite('idle');
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
