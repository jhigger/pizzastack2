import {
	Box,
	Container,
	chakra,
	Image,
	Flex,
	SimpleGrid,
	Text
} from '@chakra-ui/react';
import italy from '../assets/images/italy.webp';
import pizza_drink from '../assets/images/pizza_drink.webp';
import nectar from '../assets/images/nectar.webp';
import ged from '../assets/images/ged.webp';
import PageTransition from '../components/PageTransition';

const images = {
	avatar1: nectar,
	avatar2: ged,

	card1: italy,
	card2: pizza_drink
};

export default function About() {
	return (
		<PageTransition>
			<Flex
				bg={'black'}
				py={{base: 3, md: 24}}
				px={{base: 0, md: 5}}
				w="auto"
				justifyContent="center"
				alignItems="center"
			>
				<Container maxW="container.xl" align="center" justify="center">
					<AboutCard
						mt={8}
						image={images.card1}
						title="FILIPINO – BRITISH COUPLE TRAVELED TO NAPLES & SORRENTO ITALY, AND MASTERED THE TRADITIONAL WAY OF MAKING A PIZZA"
						text="Owners Nectar and Ged Scott are both travel and food enthusiasts. Combining their passions, they traveled to Italy to master the art of pizza making at “La Sorgente” – a traditional Italian Pizza Master Class from the birthplace of pizza!"
					/>
					<AboutCard
						mt={8}
						image={images.card2}
						title="THE ORIGINAL ON-THE-GO PIZZA EXPERIENCE SINCE 2019"
						text="Pizza Stack created a new on-the-go experience through its innovative concept and design of pizzas stacked on top of your choice of beverage. Perfect for any occasion, every family or “barkada” can truly enjoy wherever they go."
						flip
					/>
					<SimpleGrid columns={{base: 1, md: 2}} spacing={8} mt={6} maxW="max">
						<AboutAvatar
							image={images.avatar1}
							name="Nectar Scott"
							title="Founder & CEO"
						/>
						<AboutAvatar
							image={images.avatar2}
							name="Ged Scott"
							title="Co-Founder"
						/>
					</SimpleGrid>
				</Container>
			</Flex>
		</PageTransition>
	);
}

const AboutCard = ({image, title, text, flip = false, ...props}) => {
	const CardImage = () => {
		return (
			<Box w={{lg: '50%'}}>
				<Image
					loading="eager"
					h={{lg: 'full'}}
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
				py={{base: 6, md: 12}}
				px={{base: 4, md: 6}}
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

	return (
		<Box
			bg={'white'}
			mx={{lg: 8}}
			display={{lg: 'flex'}}
			maxW={{base: 'xl', lg: '5xl'}}
			shadow={{lg: 'lg'}}
			rounded={{lg: 'lg'}}
			{...props}
		>
			{flip ? (
				<>
					<CardBody />
					<CardImage />
				</>
			) : (
				<>
					<CardImage />
					<CardBody />
				</>
			)}
		</Box>
	);
};

const AboutAvatar = ({image, name, title}) => {
	return (
		<Box
			w="max"
			bg={'gray.800'}
			shadow="lg"
			rounded="lg"
			overflow="hidden"
			mx="auto"
		>
			<Image
				loading="lazy"
				w={{base: '2xs', md: 'full'}}
				h={96}
				fit="cover"
				src={image}
				alt="avatar"
			/>

			<Box py={5} textAlign="center">
				<Text fontSize="2xl" color={'white'} fontWeight="bold">
					{name}
				</Text>
				<Text fontSize="sm" color={'gray.200'}>
					{title}
				</Text>
			</Box>
		</Box>
	);
};
