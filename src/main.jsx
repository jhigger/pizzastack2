import {hydrate, render} from 'react-dom';
import './index.css';
import App from './App';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {BrowserRouter as Router} from 'react-router-dom';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false
};

const theme = extendTheme({config});

const rootElement = document.getElementById('root');
const Main = () => {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<App />
			</Router>
		</ChakraProvider>
	);
};

if (rootElement.hasChildNodes()) {
	hydrate(<Main />, rootElement);
} else {
	render(<Main />, rootElement);
}
