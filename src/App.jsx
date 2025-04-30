import './App.css';
import { Router } from './Router';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

function App() {
	return (
		<main>
			<Router
				routes={[
					{
						path: '/',
						Component: Login,
					},
					{
						path: '/home',
						Component: Home,
					},
				]}
			/>
		</main>
	);
}

export default App;
