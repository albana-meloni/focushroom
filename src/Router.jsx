import { useState, useEffect } from 'react';
import { NAVIGATION_EVENT } from './Link';
import { match } from 'path-to-regexp';

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

	let routeParams = {};

	const Page = routes.find(({ path }) => {
		if (path === currentPath) return true;
		const matcherUrl = match(path, { decode: decodeURIComponent });
		const matched = matcherUrl(currentPath);
		if (!matched) return false;
		
		routeParams = matched.params;
		return true;
	})?.Component;

	return Page ? (
		<Page routeParams={routeParams} />
	) : (
		<DefaultComponent routeParams={routeParams} />
	);
}
