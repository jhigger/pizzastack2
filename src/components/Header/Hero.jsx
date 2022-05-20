import {Link} from 'react-router-dom';
import {Container, VStack, Flex, Text, Button, Divider} from '@chakra-ui/react';
import video from '../../assets/Video720p.webm';

export default function Hero() {
	return (
		<Flex maxW="100vw" maxH="100vw">
			<video width="100%" height="100%" autoPlay loop muted playsInline>
				<source src={video} type="video/webm" />
			</video>
			<Flex
				position="absolute"
				w="full"
				h="full"
				bgGradient="linear(to-b, blackAlpha.400, blackAlpha.600, black)"
				justify="center"
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
							bgGradient="linear(to-b, yellow.200, yellow)"
							bgClip="text"
						>
							It's where it's at
						</Text>
						<Divider borderColor="white" />
					</VStack>
					<Link to="/franchise">
						<Button
							bgGradient="linear(to-b, red.200, red)"
							mt={{base: '1', md: '3'}}
							boxSize="min"
							borderRightRadius="full"
							borderBottomLeftRadius="full"
							borderColor="white"
							borderWidth={{base: 'thin', md: 'medium'}}
							py="1.5"
							_hover={{bg: 'black', textColor: 'red'}}
						>
							<Text
								as="h3"
								fontSize={{base: 'sm', md: '3xl'}}
								casing="uppercase"
							>
								Franchise Now!
							</Text>
						</Button>
					</Link>
				</Container>
			</Flex>
		</Flex>
	);
}
