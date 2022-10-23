import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './DetailPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Routes>
						<Route path="/azhwars" element={<LandingPage />} />
						<Route path="/azhwars/:name" element={<DetailPage />} /> *
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
};

export default App;
