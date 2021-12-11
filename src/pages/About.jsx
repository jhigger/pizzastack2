import {
	Box,
	Container,
	chakra,
	Image,
	Flex,
	Link,
	SimpleGrid
} from '@chakra-ui/react';
import italy from '../assets/italy.webp';
import pizza_drink from '../assets/pizza_drink.webp';
import uk from '../assets/uk.webp';

const images = {
	avatar1: 'https://via.placeholder.com/600x400?text=Avatar',
	avatar2: 'https://via.placeholder.com/600x400?text=Avatar',

	card1: italy,
	card2: pizza_drink,
	card3: uk
};

export default function About() {
	return (
		<Flex
			bg={'gray.700'}
			py={24}
			px={5}
			w="auto"
			justifyContent="center"
			alignItems="center"
		>
			<Container
				px={8}
				py={8}
				maxW="container.xl"
				align="center"
				justify="center"
			>
				<SimpleGrid columns={{base: 1, md: 2}} spacing={8} mt={6} maxW="max">
					<AboutAvatar
						image={images.avatar1}
						name="Nectar Scott"
						title="Founder"
					/>
					<AboutAvatar
						image={images.avatar2}
						name="Ged Scott"
						title="Co-Founder"
					/>
				</SimpleGrid>
				<AboutCard
					mt={8}
					image={images.card1}
					title="FILIPINO – BRITISH COUPLE TRAVELED TO NAPLES, ITALY AND MASTERED THE
					TRADITIONAL WAY OF MAKING A PIZZA"
					text="
					Owners Nectar and Ged Scott or The Scotts are travelers and food
					enthusiasts. Their love for good food inspired their travel to Naples,
					Italy. Where they mastered the art of pizza making at “La Sorgente” –
					a Pizza Master Class offered to chefs, restaurant owners and even food
					enthusiasts. It teaches traditional process of making an Italian pizza
					dough, mozzarella cheese and olive oil."
				/>
				<AboutCard
					mt={8}
					image={images.card2}
					title="ELEVATING FILIPINOS' ON -THE-GO PIZZA EXPERIENCE SINCE 2019"
					text="Pizza Stack brings a whole new level of snacking experience through its mini pizza sitting on top of a cup filled with a cold beverage. Definitely the perfect snack that every family or  ‘barkada’ can truly enjoy wherever they go."
					flip
				/>
				<AboutCard
					mt={8}
					image={images.card3}
					title="INTERNATIONALIZED IN THE UK"
					text="The Scotts proudly opened their first British store in Bromborough, United Kingdom. “Pizza snack with a twist” – perfect for the fast-paced lifestyle in UK, tailor fit to the modern market."
				/>
			</Container>
		</Flex>
	);
}

const AboutCard = ({image, title, text, flip = false, ...props}) => {
	const CardImage = () => {
		return (
			<Box w={{lg: '50%'}}>
				<Image
					h={{base: 64, lg: 'full'}}
					rounded={{lg: 'lg'}}
					objectFit="cover"
					alignSelf="center"
					justifySelf="center"
					src={image}
					alt="About"
				/>
			</Box>
		);
	};
	const CardBody = () => {
		return (
			<Box
				py={12}
				px={6}
				maxW={{base: 'xl', lg: '5xl'}}
				w={{lg: '50%'}}
				bg="yellow.50"
			>
				<chakra.h2
					fontSize={{base: 'xl', md: '2xl'}}
					color={'gray.800'}
					fontWeight="bold"
				>
					{title}
				</chakra.h2>
				<chakra.p
					mt={4}
					color={'gray.800'}
					fontWeight="thin"
					letterSpacing="wider"
				>
					{text}
				</chakra.p>
			</Box>
		);
	};

	if (flip)
		return (
			<Box
				bg={'white'}
				mx={{lg: 8}}
				display={{lg: 'flex'}}
				maxW={{lg: '5xl'}}
				shadow={{lg: 'lg'}}
				rounded={{lg: 'lg'}}
				{...props}
			>
				<CardBody />
				<CardImage />
			</Box>
		);
	return (
		<Box
			bg={'white'}
			mx={{lg: 8}}
			display={{lg: 'flex'}}
			maxW={{lg: '5xl'}}
			shadow={{lg: 'lg'}}
			rounded={{lg: 'lg'}}
			{...props}
		>
			<CardImage />
			<CardBody />
		</Box>
	);
};

const AboutAvatar = ({image, name, title}) => {
	return (
		<Box
			w="xs"
			bg={'gray.800'}
			shadow="lg"
			rounded="lg"
			overflow="hidden"
			mx="auto"
		>
			<Image w="full" h={96} fit="cover" src={image} alt="avatar" />

			<Box py={5} textAlign="center">
				<Link display="block" fontSize="2xl" color={'white'} fontWeight="bold">
					{name}
				</Link>
				<chakra.span fontSize="sm" color={'gray.200'}>
					{title}
				</chakra.span>
			</Box>
		</Box>
	);
};
