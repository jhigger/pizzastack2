import {
	chakra,
	Box,
	Container,
	Heading,
	SimpleGrid,
	Icon,
	Text,
	VStack,
	Flex
} from '@chakra-ui/react';
import {FaYoutube} from '@react-icons/all-files/fa/FaYoutube';
import {FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare';
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram';
import {MdLocationOn} from '@react-icons/all-files/md/MdLocationOn';
import {MdEmail} from '@react-icons/all-files/md/MdEmail';

const socials = [
	{
		icon: FaYoutube,
		title: 'Youtube',
		link: 'https://www.youtube.com/channel/UCSrtB2LcCGJXaK4XPY8nrJw'
	},
	{
		icon: FaFacebookSquare,
		title: 'Facebook',
		link: 'https://www.facebook.com/PizzaStackTM'
	},
	{
		icon: FaInstagram,
		title: 'Instagram',
		link: 'https://www.instagram.com/pizzastack.ph/'
	}
];

const Map = ({...props}) => {
	return (
		<Box my={4} {...props}>
			<iframe
				width="100%"
				height="500"
				frameBorder="0"
				scrolling="no"
				marginHeight="0"
				marginWidth="0"
				src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pizza%20Stack%20363%20Legarda%20Rd,%20Baguio,%20Benguet+(Pizza%20Stack)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
			>
				<a href="https://www.gps.ie/car-satnav-gps/">sat navs</a>
			</iframe>
		</Box>
	);
};

export default function Contact() {
	return (
		<Flex
			bg={'black'}
			pt={{base: 12, md: 24}}
			w="auto"
			justifyContent="center"
			alignItems="center"
		>
			<Container shadow="xl" maxW="container.xl">
				<SimpleGrid
					p={{base: 1, md: 6}}
					columns={{base: 1, lg: 2}}
					justifyContent="center"
					alignItems="center"
				>
					<Map display={{base: 'none', lg: 'block'}} />
					<VStack spacing={4} as={Container} maxW={'md'} textAlign={'center'}>
						<Heading fontSize={{base: '2xl', md: '4xl'}} my={8}>
							You Can Find Us Here
						</Heading>
						<Text
							color={'gray.400'}
							fontSize={{base: 'sm', md: 'lg'}}
							lineHeight="tall"
							fontWeight="semibold"
							letterSpacing={{base: 'wider', md: 'widest'}}
						>
							<Icon w={6} h={6} as={MdLocationOn} /> 363 Legarda Rd, Baguio
							City, Benguet
						</Text>
						<Text
							color={'gray.400'}
							fontSize={{base: 'sm', md: 'lg'}}
							lineHeight="tall"
							fontWeight={{base: 'thin', md: 'semibold'}}
							letterSpacing={{base: 'wider', md: 'widest'}}
						>
							<Icon w={6} h={6} as={MdEmail} />{' '}
							Pizzastack.Franchising@google.com
						</Text>
						<Container maxW={'lg'} py={4} justify="center">
							<SimpleGrid columns={{base: 3}}>
								{socials.map((social, i) => (
									<chakra.a
										fontSize={{base: 'xs', md: 'sm'}}
										fontWeight="medium"
										ml="2"
										href={social.link}
										target="_blank"
										key={i}
									>
										<VStack align={'center'}>
											<Icon w={9} h={9} as={social.icon} />
											<Text fontWeight={400}>{social.title}</Text>
										</VStack>
									</chakra.a>
								))}
							</SimpleGrid>
						</Container>
					</VStack>
					<Map display={{base: 'block', lg: 'none'}} />
				</SimpleGrid>
			</Container>
		</Flex>
	);
}
