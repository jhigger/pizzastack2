import React from 'react';
import Form from './Form/Form';
import {Box, Container} from '@chakra-ui/react';
import Features from './Features';

export default function Franchise() {
	return (
		<Box py={{base: 12, md: 24}} bg="black">
			<Container maxW="container.xl" justify="center" align="center">
				<Features />
			</Container>
			<Form />
		</Box>
	);
}
