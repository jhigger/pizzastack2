import React from 'react';
import {
	ChakraProvider,
	Box,
	Icon,
	Container,
	Flex,
	VStack,
	Text,
	HStack,
	SimpleGrid,
	Image
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
	return (
		<ChakraProvider>
			<Box w="full" h="min" position="relative">
				<Navbar />
				<Hero />
				<Icon
					zIndex="1"
					position="absolute"
					bottom="-1"
					w="full"
					h="min"
					transform={('scaleX(-1)', 'scaleY(-1)')}
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="black"></path>
				</Icon>
			</Box>
			{/* section1 */}
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
						columns={{base: 1, md: 2}}
						spacing="1"
						h="110%"
						position="absolute"
						top={{base: '0', md: '-10vh'}}
						zIndex="1"
					>
						<Text m="10" alignSelf="center" fontSize="2xl" fontWeight="thin">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
							blanditiis eligendi odio necessitatibus alias ipsa dicta officiis
							cum quod eaque suscipit vel animi, tempore harum, perferendis
							autem laudantium natus nobis!
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
				<Icon
					zIndex="1"
					position="absolute"
					bottom="-1"
					w="full"
					h="min"
					transform={('scaleX(-1)', 'scaleY(-1)')}
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="white"></path>
				</Icon>
			</Box>
		</ChakraProvider>
	);
}

export default App;
