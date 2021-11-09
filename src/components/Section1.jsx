import React from 'react';
import {Box, Container, Text, SimpleGrid, Image} from '@chakra-ui/react';
import Tilt from './Tilt';

export default function Section1() {
	return (
		<Box bg="black" color="white" w="full" h="2xl" position="relative">
			<Container
				maxW="container.xl"
				h="full"
				justify="center"
				align="center"
				position="relative"
				overflow={{base: 'hidden', md: 'visible'}}
			>
				<SimpleGrid
					mr="4"
					columns={{base: 1, md: 2}}
					spacing="1"
					h="110%"
					position="absolute"
					top={{base: '0', md: '-10vh'}}
				>
					<Text
						m="10"
						alignSelf="center"
						fontSize={{base: 'xl', md: '2xl'}}
						fontWeight="thin"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
						blanditiis eligendi odio necessitatibus alias ipsa dicta officiis
						cum quod eaque suscipit vel animi, tempore harum, perferendis autem
						laudantium natus nobis!
					</Text>
					<Image
						objectFit="cover"
						alignSelf="center"
						justifySelf="center"
						src="https://via.placeholder.com/400x600?text=Image"
						alt="PizzaStack"
					/>
				</SimpleGrid>
			</Container>
			<Tilt fill="white" />
		</Box>
	);
}
