import React from 'react';
import Form from './Form/Form';
import {Box, Container, Image} from '@chakra-ui/react';
import FAQs from './FAQs';
import why from '../../assets/why.webp';

export default function Franchise() {
	return (
		<Box pt={24}>
			<Container maxW="container.xl" justify="center" align="center" p="12">
				<Image
					loading="eager"
					objectFit="cover"
					alignSelf="center"
					justifySelf="center"
					src={why}
					alt="why"
				/>
			</Container>
			<FAQs />
			<Form />
		</Box>
	);
}
