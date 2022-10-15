import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './DetailPage';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/azhwars" element={<LandingPage />} />
					<Route path="/azhwars/:name" element={<DetailPage />} /> *
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
