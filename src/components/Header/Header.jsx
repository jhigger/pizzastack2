import React from 'react';
import {Box, Icon} from '@chakra-ui/react';
import Navbar from './Navbar';
import Hero from './Hero';
import Tilt from '../Tilt';

export default function Header() {
	return (
		<Box w="full" h="min" position="relative">
			<Navbar />
			<Hero />
			<Tilt fill="black" />
		</Box>
	);
}
