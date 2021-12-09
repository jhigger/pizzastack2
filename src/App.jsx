import React from 'react';
import {
	ChakraProvider,
	Box,
	Icon,
	Container,
	Flex,
	VStack,
	Text,
	HStack,
	SimpleGrid,
	Image,
	extendTheme
} from '@chakra-ui/react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Franchise from './pages/Franchise/Franchise';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false
};

const theme = extendTheme({config});

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/menu" component={Menu} />
					<Route path="/about">About</Route>
					<Route path="/contact">Contact</Route>
					<Route path="/franchise" component={Franchise} />
				</Switch>
				<Footer />
			</Router>
		</ChakraProvider>
	);
}

export default App;
