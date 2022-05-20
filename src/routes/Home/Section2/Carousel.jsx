import {useState, useEffect} from 'react';
import {Box, Text, Image, Flex, HStack} from '@chakra-ui/react';
import slide1 from '../../../assets/images/slide1.webp';
import slide2 from '../../../assets/images/slide2.webp';
import slide3 from '../../../assets/images/slide3.webp';

const Carousel = () => {
	const arrowStyles = {
		cursor: 'pointer',
		pos: 'absolute',
		top: '50%',
		w: 'auto',
		m: 2,
		p: '8px 16px',
		color: 'red.500',
		fontWeight: 'bold',
		fontSize: 16,
		transition: '0.6s ease',
		borderRadius: '50%',
		userSelect: 'none',
		_hover: {
			opacity: 0.8,
			bg: 'yellow.300',
			color: 'black'
		},
		bg: 'whiteAlpha.400'
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
			<Flex
				w="full"
				pos="relative"
				overflow="hidden"
				borderRadius="xl"
				border="1px"
				borderColor="whiteAlpha.500"
			>
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
								_hover={{bg: 'yellow.300'}}
								onClick={() => setSlide(index)}
							/>
						);
					})}
				</HStack>
			</Flex>
		</Flex>
	);
};

export default Carousel;
