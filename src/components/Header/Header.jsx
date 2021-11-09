import React from 'react';
import {Box, Icon} from '@chakra-ui/react';
import Hero from './Hero';
import Tilt from '../Tilt';

export default function Header() {
	return (
		<Box w="full" h="min" position="relative">
			<Hero />
			<Tilt z='0' fill="black" />
		</Box>
	);
}
