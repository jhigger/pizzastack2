import React from 'react';
import {
	Box,
	Container,
	Text,
	SimpleGrid,
	Image,
	Heading
} from '@chakra-ui/react';
import pizzastack from '../assets/pizzastack.webp';

export default function Section1() {
	return (
		<Box bg="black" color="white" w="full" h="2xl" position="relative" pt={24}>
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
					<Text m="10" alignSelf="center" fontSize={'xl'} fontWeight="thin">
						<Heading
							fontSize="3xl"
							fontWeight="bold"
							letterSpacing="widest"
							mb="12"
						>
							IT'S NEW, IT'S UNIQUE and most of all, IT'S DELICIOUS
						</Heading>
						Here's a very NEW concept of Pizza Design with less packaging and
						more environmentally friendly with its edible rice paper and
						biodegradable paper cups. Eating a pizza 'On the Go'. Its unique
						'Stack' design means it is now possible to hold a full size pizza
						with beverage, ALL IN ONE HAND!
					</Text>
					<Image
						objectFit="cover"
						alignSelf="center"
						justifySelf="center"
						src={pizzastack}
						alt="PizzaStack"
					/>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
