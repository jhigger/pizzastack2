import {
	chakra,
	Box,
	Container,
	Heading,
	SimpleGrid,
	Icon,
	Text,
	Stack,
	VStack
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
		link: 'https://www.instagram.com/pizza_stack_ph/'
	}
];
export default function Contact() {
	return (
		<Container pt={24} pb={12} mx="auto" shadow="xl" maxW="container.xl">
			<Box p={12}>
				<Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
					<Heading fontSize={'4xl'} my={8}>
						You Can Find Us Here
					</Heading>
					<Text
						color={'gray.400'}
						fontSize={'xl'}
						lineHeight="tall"
						fontWeight="semibold"
						letterSpacing="widest"
					>
						<Icon w={6} h={6} as={MdLocationOn} /> 363 Legarda Rd, Baguio City,
						Benguet
					</Text>
					<Text
						color={'gray.400'}
						fontSize={'xl'}
						lineHeight="tall"
						fontWeight="semibold"
						letterSpacing="wider"
					>
						<Icon w={6} h={6} as={MdEmail} /> Pizzastack.Franchising@google.com
					</Text>
				</Stack>

				<Container maxW={'xl'} mt={12}>
					<SimpleGrid columns={{base: 1, md: 3}} spacing={12}>
						{socials.map((social) => (
							<chakra.a
								fontSize={{base: 'xs', md: 'xl'}}
								fontWeight="medium"
								ml="2"
								href={social.link}
								target="_blank"
							>
								<VStack align={'center'}>
									<Icon w={12} h={12} as={social.icon} />
									<Text fontWeight={400}>{social.title}</Text>
								</VStack>
							</chakra.a>
						))}
					</SimpleGrid>
				</Container>
			</Box>
			<iframe
				width="100%"
				height="600"
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"
				src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pizza%20Stack%20363%20Legarda%20Rd,%20Baguio,%20Benguet+(Pizza%20Stack)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
			>
				<a href="https://www.gps.ie/car-satnav-gps/">sat navs</a>
			</iframe>
		</Container>
	);
}
