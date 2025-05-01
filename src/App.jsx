import './App.css';
import { Router } from './Router';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Pomodoro } from './pages/Pomodoro';

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
					{
						path: '/pomodoro/:focusTime/:breakTime/:cycles',
						Component: Pomodoro,
					}
				]}
			/>
		</main>
	);
}

export default App;
