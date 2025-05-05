import './ProgressBar.css';

export function ProgressBar({ progress }) {
	return (
		<span className='progress-bar corners'>
			<span className='progress-bar__fill corners' data-progress={progress}></span>
		</span>
	);
}
