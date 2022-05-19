import React, {useState, useEffect} from 'react';
import {
	Box,
	Container,
	Text,
	SimpleGrid,
	Image,
	Heading,
	Flex,
	HStack
} from '@chakra-ui/react';
import slide1 from '../../assets/images/slide1.webp';
import slide2 from '../../assets/images/slide2.webp';
import slide3 from '../../assets/images/slide3.webp';

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
			img: slide1,
			alt: 'First Slide'
		},
		{
			img: slide2,
			alt: 'Second Slide'
		},
		{
			img: slide3,
			alt: 'Third Slide'
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
			<Flex w="full" pos="relative" overflow="hidden" borderRadius="xl">
				<Flex w="full" {...carouselStyle}>
					{slides.map((slide, sid) => {
						return (
							<Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
								<Image
									src={slide.img}
									alt={slide.alt}
									backgroundSize="contain"
									borderRadius="xl"
									width="full"
									height="full"
									loading="lazy"
								/>
							</Box>
						);
					})}
				</Flex>
				<Text {...arrowStyles} left="0" onClick={prevSlide}>
					&#10094;
				</Text>
				<Text {...arrowStyles} right="0" onClick={nextSlide}>
					&#10095;
				</Text>
				<HStack justify="center" pos="absolute" bottom="8px" w="full">
					{slides.map((_, index) => {
						return (
							<Box
								key={`dots-${index}`}
								cursor="pointer"
								boxSize={4}
								my="2"
								bg={
									currentSlide === index ? 'whiteAlpha.800' : 'whiteAlpha.500'
								}
								rounded="full"
								transition="background-color 0.6s ease"
								_hover={{bg: 'whiteAlpha.800'}}
								onClick={() => setSlide(index)}
							/>
						);
					})}
				</HStack>
			</Flex>
		</Flex>
	);
};
