import { useState, useEffect } from 'react';
import { NAVIGATION_EVENT } from './Link';

export function Router({
	routes = [],
	defaultComponent: DefaultComponent = () => {
		<h1>404 page not found</h1>;
	},
}) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};
		window.addEventListener(NAVIGATION_EVENT, onLocationChange);
		window.addEventListener('popstate', onLocationChange);
		return () => {
			window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
			window.removeEventListener('popstate', onLocationChange);
		};
	}, []);

	const Page = routes.find(({ path }) => path === currentPath)?.Component;
	return Page ? <Page /> : <DefaultComponent />;
}
