import {createContext, useContext} from 'react';
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
	Container,
	Image
} from '@chakra-ui/react';
import {AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const PathContext = createContext();

const NavLink = ({to, text}) => {
	const path = useContext(PathContext);
	const bg = text.toLowerCase() == path.slice(1) ? '#28324B' : '';

	return (
		<Link to={to}>
			<Button
				variant="ghost"
				_hover={{bg: 'yellow', textColor: 'black'}}
				_active={{
					bg: '#AAFFE5',
					transform: 'scale(0.98)'
				}}
				_focus={{
					boxShadow: '0'
				}}
				bg={bg}
				color="white"
			>
				{text}
			</Button>
		</Link>
	);
};

const Links = () => {
	return (
		<>
			<NavLink to="/" text="Home" />
			<NavLink to="/menu" text="Menu" />
			<NavLink to="/about" text="About" />
			<NavLink to="/contact" text="Contact" />
			<NavLink to="/franchise" text="Franchise" />
		</>
	);
};

export default function Navbar({path}) {
	const bg = 'blackAlpha.700';
	const color = 'white';
	const mobileNav = useDisclosure();

	return (
		<PathContext.Provider value={path}>
			<Box position="absolute" top="0" w="full" zIndex="1">
				<chakra.header bg={bg} w="full" shadow="xl">
					<Container maxW="container.xl">
						<Flex
							alignItems="center"
							justifyContent="space-between"
							mx="auto"
							px={{base: 1, md: 5}}
							h={{base: '2rem', md: '100%'}}
						>
							<chakra.a
								fontSize={{base: 'xs', md: 'xl'}}
								fontWeight="medium"
								ml="2"
								href="/"
								title="PizzaStack"
								color={color}
							>
								<Flex direction="row" align="center" justify="center">
									<Image
										src={Logo}
										alt="Logo"
										boxSize={{base: '2rem', md: '6rem'}}
										objectFit="contain"
									/>
									PizzaStack™
								</Flex>
							</chakra.a>
							<HStack display="flex" alignItems="center" spacing={1}>
								<HStack
									spacing={5}
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
										bg={'blackAlpha.900'}
										spacing={2}
										rounded="xl"
										shadow="sm"
									>
										<CloseButton
											aria-label="Close menu"
											onClick={mobileNav.onClose}
											color={'white'}
											mt={2}
										/>
										<Links />
									</VStack>
								</Box>
							</HStack>
						</Flex>
					</Container>
				</chakra.header>
			</Box>
		</PathContext.Provider>
	);
}
