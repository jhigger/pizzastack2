import React, {useState, useEffect} from 'react';
import {
	Box,
	Container,
	Text,
	SimpleGrid,
	Image,
	Heading,
	Flex,
	HStack,
	Stack
} from '@chakra-ui/react';
import slide1 from '../assets/images/slide1.webp';
import slide2 from '../assets/images/slide2.webp';
import slide3 from '../assets/images/slide3.webp';

export default function Section2() {
	return (
		<Box bg="black" color="white" w="full" h="min">
			<Container
				maxW="container.xl"
				justify="center"
				align="center"
				p={{base: 1, md: 12}}
			>
				<SimpleGrid columns={{base: 1, lg: 2}} spacing="1">
					<Carousel />
					<Box alignSelf="center" m="10">
						<Heading
							fontSize={{base: 'xl', lg: '3xl'}}
							fontWeight="bold"
							letterSpacing="widest"
							mb="12"
						>
							Introducing the Award Winning Pizza Concept. Pizza Stack is Where
							it's At!!!
						</Heading>
						<Text fontSize={{base: 'lg', lg: 'xl'}} fontWeight="thin">
							Ever tried eating a pizza from a box while holding a drink and
							on-the-go? It's almost impossible! Not anymore! The founders of
							Pizza Stack realized the huge potential of having an ultimate
							quality pizza, stacked on a cup, all in one hand. Its unique
							design means it's on-the-go in so many ways, walking along, in the
							cup holder of your car or your cinema seat, or even at a concert.
							It's the perfect meal to have anywhere. The founders traveled to
							Italy to learn from the pizza making masters in Naples and
							Sorrento… the birth place of pizza. From this, the founders
							created Pizza Stack's own unique recipe. The quality and attention
							to detail means you can really taste the difference! The award
							winning concept and ultimate quality means that the Pizza Stack
							Franchise is the next big thing to take the Philippines by storm.
						</Text>
					</Box>
				</SimpleGrid>
			</Container>
		</Box>
	);
}

const Carousel = () => {
	const arrowStyles = {
		cursor: 'pointer',
		pos: 'absolute',
		top: '50%',
		w: 'auto',
		mt: '-22px',
		p: '8px 16px',
		color: 'red.500',
		fontWeight: 'bold',
		fontSize: '18px',
		transition: '0.6s ease',
		borderRadius: '50%',
		userSelect: 'none',
		_hover: {
			opacity: 0.8,
			bg: 'yellow.300',
			color: 'black'
		}
	};

	const slides = [
		{
			img: slide1
			// label: 'First Slide',
			// description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
		},
		{
			img: slide2
			// label: 'Second Slide',
			// description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: slide3
			// label: 'Third Slide',
			// description:
			// 	'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
		}
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const slidesCount = slides.length;

	const prevSlide = () => {
		setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
	};
	const nextSlide = () => {
		setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
	};
	const setSlide = (slide) => {
		setCurrentSlide(slide);
	};
	const carouselStyle = {
		transition: 'all .5s',
		ml: `-${currentSlide * 100}%`
	};

	const SLIDES_INTERVAL_TIME = 3000;
	const ANIMATION_DIRECTION = 'right';

	useEffect(() => {
		const automatedSlide = setInterval(() => {
			ANIMATION_DIRECTION.toLowerCase() === 'left' ? prevSlide() : nextSlide();
		}, SLIDES_INTERVAL_TIME);
		return () => clearInterval(automatedSlide);
	}, [currentSlide]);

	return (
		<Flex
			w="full"
			p={{base: 1, md: 12}}
			alignItems="center"
			justifyContent="center"
		>
			<Flex w="full" pos="relative" overflow="hidden">
				<Flex h={{base: 'lg', md: '3xl'}} w="full" {...carouselStyle}>
					{slides.map((slide, sid) => (
						<Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
							<Image src={slide.img} boxSize="full" backgroundSize="contain" />
							<Stack
								p="8px 12px"
								pos="absolute"
								bottom="24px"
								textAlign="center"
								w="full"
								mb="8"
								color="white"
							>
								{/* <Text fontSize="2xl">{slide.label}</Text>
								<Text fontSize="lg">{slide.description}</Text> */}
							</Stack>
						</Box>
					))}
				</Flex>
				<Text {...arrowStyles} left="0" onClick={prevSlide}>
					&#10094;
				</Text>
				<Text {...arrowStyles} right="0" onClick={nextSlide}>
					&#10095;
				</Text>
				<HStack justify="center" pos="absolute" bottom="8px" w="full">
					{Array.from({length: slidesCount}).map((_, slide) => (
						<Box
							key={`dots-${slide}`}
							cursor="pointer"
							boxSize={['7px', , '15px']}
							m="0 2px"
							bg={currentSlide === slide ? 'blackAlpha.800' : 'blackAlpha.500'}
							rounded="50%"
							display="inline-block"
							transition="background-color 0.6s ease"
							_hover={{bg: 'blackAlpha.800'}}
							onClick={() => setSlide(slide)}
						></Box>
					))}
				</HStack>
			</Flex>
		</Flex>
	);
};
