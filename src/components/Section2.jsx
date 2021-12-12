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
							Introducing the FIRST and ONLY Pizza With a Hole, Pizza Stack is
							Where it's At!!!
						</Heading>
						<Text fontSize={{base: 'lg', lg: 'xl'}} fontWeight="thin">
							"Have you ever tried eating a whole pizza from a box that you
							don't have to slice it??? or eating a whole pizza while holding a
							drink, in one hand and on the go? It's almost impossible, right?!
							Well, not anymore! That's how the founders of Pizza Stack first
							thought of their idea. They realised the huge potential of their
							concept of holding your drink and pizza in one hand while walking.
							And if you are traveling or driving, it fits in the cup holder of
							your car, or watch a movie and stand it in the holder of your
							cinema seat... Pizza Stack is a totally new concept of eating
							pizza on-the-go, any time, any place, with no mess as pizzas won't
							stick together when stacked on top of the other. And because it
							doesn't require a huge packaging, it is also good for both you and
							to the environment. Realising it's potential, the founders created
							Pizza Stack with big plans to grow and expand the business from
							the very start. High quality affordable pizza was very important
							for success, so they went to Italy to learn from the pizza making
							masters in La Sorgente in Napoli, Italy and then they created
							their own unique Pizza Stack recipe. With this attention to detail
							you really can taste the difference! The unique concept together
							with the highest quality is why the Pizza Stack franchise is the
							next big thing to take the Philippines by storm... And it's not
							stopping there! Plans have already been made to take Pizza Stack
							International."
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
