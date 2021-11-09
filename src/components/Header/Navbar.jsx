import React from 'react';
import {
	chakra,
	Box,
	Flex,
	HStack,
	Button,
	useDisclosure,
	VStack,
	IconButton,
	CloseButton,
	Container
} from '@chakra-ui/react';
import {AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Links = ({color}) => {
	return (
		<>
			<Link to="/">
				<Button variant="ghost" color={color}>
					Home
				</Button>
			</Link>
			<Link to="/menu">
				<Button variant="ghost" color={color}>
					Menu
				</Button>
			</Link>
			<Link to="/about">
				<Button variant="ghost" color={color}>
					About
				</Button>
			</Link>
			<Link to="/contact">
				<Button variant="ghost" color={color}>
					Contact
				</Button>
			</Link>
			<Link to="/franchise">
				<Button variant="ghost" color={color}>
					Franchise
				</Button>
			</Link>
		</>
	);
};

export default function Navbar() {
	const bg = 'blackAlpha.700';
	const color = 'white';
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
						<chakra.a
							fontSize={{base: 'xs', md: 'xl'}}
							fontWeight="medium"
							ml="2"
							href="/"
							title="Logo"
							color={color}
							alignSelf="center"
							justifySelf="center"
						>
							PizzaStack
						</chakra.a>
						<HStack display="flex" alignItems="center" spacing={1}>
							<HStack
								spacing={10}
								mr={1}
								display={{base: 'none', md: 'inline-flex'}}
							>
								<Links color={color} />
							</HStack>
							<Box display={{base: 'inline-flex', md: 'none'}} zIndex="100">
								<IconButton
									mr="1.4rem"
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
									top={1}
									right={1}
									ml="auto"
									mr="auto"
									display={mobileNav.isOpen ? 'flex' : 'none'}
									flexDirection="column"
									p={1}
									pb={5}
									w="max"
									bg={'whiteAlpha.900'}
									spacing={2}
									rounded="xl"
									shadow="sm"
								>
									<CloseButton
										aria-label="Close menu"
										onClick={mobileNav.onClose}
										color={'black'}
									/>
									<Links color={'black'} />
								</VStack>
							</Box>
						</HStack>
					</Flex>
				</Container>
			</chakra.header>
		</Box>
	);
}
