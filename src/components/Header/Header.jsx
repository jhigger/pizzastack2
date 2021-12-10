import React from 'react';
import {Box} from '@chakra-ui/react';
import Hero from './Hero';

export default function Header() {
	return (
		<Box w="full" h="min" position="relative">
			<Hero />
		</Box>
	);
}
