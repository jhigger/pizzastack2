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
	Image
} from '@chakra-ui/react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
	return (
		<ChakraProvider>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/menu" component={Menu} />
					<Route path="/about">About</Route>
					<Route path="/contact">Contact</Route>
					<Route path="/franchise">Franchise</Route>
				</Switch>
				<Footer />
			</Router>
		</ChakraProvider>
	);
}

export default App;
