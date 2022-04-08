import 'bootstrap-css-only/css/bootstrap.min.css';
import routes from './routes/index';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import './assets/css/commom.scss';
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{routes.map((route, index) => <Route
						key={index}
						path={route.path}
						exact={route.exact}
						element={route.component}
					/>)
					}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
