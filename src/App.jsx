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
import Header from './components/Header/Header';
import Section1 from './components/Section1';

function App() {
	return (
		<ChakraProvider>
			<Header />
			<Section1 />
		</ChakraProvider>
	);
}

export default App;
