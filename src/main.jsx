import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {BrowserRouter as Router} from 'react-router-dom';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false
};

const theme = extendTheme({config});

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<Router>
			<App />
		</Router>
	</ChakraProvider>,
	document.getElementById('root')
);
