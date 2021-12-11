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
		<Box bg="black" color="white" w="full" h="min" position="relative">
			<Container maxW="container.xl" justify="center" align="center" p="12">
				<SimpleGrid columns={{base: 1, lg: 2}} spacing="1">
					<Text
						m="10"
						alignSelf="center"
						fontSize={{base: 'lg', lg: 'xl'}}
						fontWeight="thin"
					>
						<Heading
							fontSize={{base: 'xl', lg: '3xl'}}
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
						loading="lazy"
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
