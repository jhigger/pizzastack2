import React from 'react';

import {
	chakra,
	Box,
	Flex,
	useColorModeValue,
	HStack,
	Button,
	useDisclosure,
	VStack,
	IconButton,
	CloseButton,
	Container
} from '@chakra-ui/react';
import {AiOutlineMenu} from 'react-icons/ai';

const Links = ({color}) => {
	return (
		<>
			<Button variant="ghost" color={color}>
				Home
			</Button>
			<Button variant="ghost" color={color}>
				Menu
			</Button>
			<Button variant="ghost" color={color}>
				About
			</Button>
			<Button variant="ghost" color={color}>
				Contact
			</Button>
			<Button variant="ghost" color={color}>
				Franchise
			</Button>
		</>
	);
};

export default function Navbar() {
	const bg = useColorModeValue('blackAlpha.700', 'gray.800');
	const color = useColorModeValue('white', 'black');
	const mobileNav = useDisclosure();

	return (
		<Box position="absolute" top="0" w="full" zIndex="1">
			<chakra.header
				bg={bg}
				w="full"
				px={{base: 0, md: 4}}
				py={{base: 0, md: 4}}
				shadow="xl"
			>
				<Container maxW="container.xl">
					<Flex
						alignItems="center"
						justifyContent="space-between"
						mx="auto"
						h={{base: '2rem', md: '100%'}}
					>
						<Flex>
							<chakra.a
								fontSize={{base: 'xs', md: 'xl'}}
								fontWeight="medium"
								ml="2"
								href="/"
								title="Logo"
								display="flex"
								alignItems="center"
								color={color}
							>
								PizzaStack
							</chakra.a>
						</Flex>
						<HStack display="flex" alignItems="center" spacing={1}>
							<HStack
								spacing={1}
								mr={1}
								color="brand.500"
								display={{base: 'none', md: 'inline-flex'}}
							>
								<Links color={color} />
							</HStack>
							<Box display={{base: 'inline-flex', md: 'none'}}>
								<IconButton
									h="100%"
									display={{base: 'flex', md: 'none'}}
									aria-label="Open menu"
									fontSize="20px"
									color={color}
									variant="ghost"
									icon={<AiOutlineMenu />}
									onClick={mobileNav.onOpen}
								/>

								<VStack
									pos="absolute"
									top={0}
									left={0}
									right={0}
									display={mobileNav.isOpen ? 'flex' : 'none'}
									flexDirection="column"
									p={2}
									pb={4}
									m={2}
									bg={bg}
									spacing={3}
									rounded="sm"
									shadow="sm"
								>
									<CloseButton
										aria-label="Close menu"
										onClick={mobileNav.onClose}
										color={color}
									/>
									<Links color={color} />
								</VStack>
							</Box>
						</HStack>
					</Flex>
				</Container>
			</chakra.header>
		</Box>
	);
}
