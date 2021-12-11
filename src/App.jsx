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
import About from './pages/About';
import Contact from './pages/Contact';
import Franchise from './pages/Franchise/Franchise';
import NotFound from './pages/NotFound';

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
					<Route exact path="/home" component={Home} />
					<Route exact path="/menu" component={Menu} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/franchise" component={Franchise} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</ChakraProvider>
	);
}

export default App;
