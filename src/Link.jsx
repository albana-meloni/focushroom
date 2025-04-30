/* eslint-disable react-refresh/only-export-components */
export const NAVIGATION_EVENT = 'push-state';

export function navigate(path) {
	window.history.pushState({}, '', path);
	const navigationEvent = new Event(NAVIGATION_EVENT);
	window.dispatchEvent(navigationEvent);
}

export function Link({ to, target = '_self', children, ...props }) {
	const handleClick = (event) => {
		event.preventDefault();
		navigate(to);
	};
	return (
		<a onClick={handleClick} href={to} target={target} {...props}>
			{children}
		</a>
	);
}
