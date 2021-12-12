import React from 'react';
import Form from './Form/Form';
import {Box, Container, Image} from '@chakra-ui/react';
import FAQs from './FAQs';
import why from '../../assets/images/why.webp';

export default function Franchise() {
	return (
		<Box pt={{base: 12, md: 24}}>
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
