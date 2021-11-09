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
import Header from './components/Header/Header';
import Section1 from './components/Section1';
import Footer from './components/Footer';

function App() {
	return (
		<ChakraProvider>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Header />
						<Section1 />
					</Route>
					<Route path="/menu">Menu</Route>
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
