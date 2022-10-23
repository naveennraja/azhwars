import { createTheme } from '@mui/material/styles';

const font = "'Quicksand', sans-serif";

const theme = createTheme({
	typography: {
		fontFamily: font,
	},
	palette: {
		type: 'light',
		primary: {
			main: '#fafafa',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#6e6e6e',
		},
		text: {
			primary: '#e6e6e6',
		},
		error: {
			main: '#ee315e',
		},
	},
});

export default theme;
