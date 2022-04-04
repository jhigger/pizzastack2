import React from 'react';
import Form from './Form/Form';
import {Box, Container, Image} from '@chakra-ui/react';
import FAQs from './FAQs';
import why from '../../assets/images/why.webp';

export default function Franchise() {
	return (
		<Box py={{base: 12, md: 24}} bg="black">
			<Container
				maxW="container.xl"
				justify="center"
				align="center"
				p={{base: 1, md: 12}}
			>
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
