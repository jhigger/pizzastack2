import React from 'react';
import {Container, VStack, Flex, Text, Button, Divider} from '@chakra-ui/react';
import video from '../assets/Advertisement.webm';

export default function Hero() {
	return (
		<Flex justify="center" align="start" minW="100vh" maxH="50vw">
			<video width="100%" height="100%" autoPlay loop muted>
				<source src={video} type="video/webm" />
			</video>

			<Flex
				position="absolute"
				top="0"
				w="full"
				h="full"
				bg="blackAlpha.50"
				color="white"
				justify="center"
				align="start"
				pl={{base: '4', md: '16'}}
				direction="column"
			>
				<Container maxW="container.xl">
					<VStack align="start" spacing="0" w="max">
						<Text
							as="h1"
							fontSize={{base: '4xl', md: '7xl'}}
							fontWeight="semibold"
							casing="uppercase"
							mb={{base: '-3', md: '-5'}}
						>
							Pizza Stack
						</Text>
						<Text
							as="h2"
							fontSize={{base: '2xl', md: '5xl'}}
							fontWeight="medium"
							casing="uppercase"
							color="yellow"
						>
							It's where it's at
						</Text>
						<Divider borderColor="white" />
					</VStack>
					<Button
						bg="red"
						mt={{base: '1', md: '3'}}
						boxSize="min"
						borderRightRadius="full"
						borderBottomLeftRadius="full"
						borderColor="white"
						borderWidth={{base: 'thin', md: 'medium'}}
						py="1.5"
					>
						<Text as="h3" fontSize={{base: 'sm', md: '3xl'}} casing="uppercase">
							Franchise Now!
						</Text>
					</Button>
				</Container>
			</Flex>
		</Flex>
	);
}
