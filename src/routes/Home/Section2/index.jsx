import {lazy, Suspense} from 'react';
import {Box, Container, Text, SimpleGrid, Heading} from '@chakra-ui/react';
const Carousel = lazy(() => import('./Carousel'));

export default function Section2() {
	return (
		<Box bg="black">
			<Container
				maxW="container.xl"
				justify="center"
				align="center"
				p={{base: 1, md: 12}}
			>
				<SimpleGrid columns={{base: 1, lg: 2}} spacing={2}>
					<Suspense fallback={<></>}>
						<Carousel />
					</Suspense>
					<Box alignSelf="center" m={12}>
						<Heading
							fontSize={{base: 'xl', lg: '3xl'}}
							fontWeight="bold"
							letterSpacing="wider"
							mb={8}
						>
							Introducing the Award Winning Pizza Concept.
							<br />
							Pizza Stack is Where it's At!!!
						</Heading>
						<Text fontSize={{base: 'lg', lg: '2xl'}} fontWeight="thin">
							Ever tried eating a pizza from a box while holding a drink and
							on-the-go? It's almost impossible! Not anymore! The founders of
							Pizza Stack realized the huge potential of having an ultimate
							quality pizza, stacked on a cup, all in one hand. Its unique
							design means it's on-the-go in so many ways, walking along, in the
							cup holder of your car or your cinema seat, or even at a concert.
							It's the perfect meal to have anywhere. The founders traveled to
							Italy to learn from the pizza making masters in Naples and
							Sorrento… the birth place of pizza. From this, the founders
							created Pizza Stack's own unique recipe. The quality and attention
							to detail means you can really taste the difference! The award
							winning concept and ultimate quality means that the Pizza Stack
							Franchise is the next big thing to take the Philippines by storm.
						</Text>
					</Box>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
