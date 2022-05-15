import React from 'react';
import {
	chakra,
	Box,
	SimpleGrid,
	Flex,
	Container,
	useMediaQuery,
	Spacer
} from '@chakra-ui/react';
import data from '../assets/menu.json';
import pattern from '../assets/images/pattern.jpg';

const MenuItem = ({title, children, length}) => {
	const cols = length % 2 == 0 ? 2 : 3;
	return (
		<Box align="center" mb={12}>
			<chakra.p
				mb={12}
				mt={24}
				fontSize={{base: '2xl', sm: '3xl'}}
				lineHeight="taller"
				fontWeight="bold"
				letterSpacing="wider"
				bg="blackAlpha.900"
				rounded="full"
			>
				{title}
			</chakra.p>
			<SimpleGrid
				columns={{base: 1, md: 2, lg: cols}}
				spacingY={6}
				spacingX={2}
				mt={6}
			>
				{children}
			</SimpleGrid>
		</Box>
	);
};

const ProductName = ({name}) => {
	return (
		<chakra.h3
			fontSize={{base: 'xl', md: '3xl'}}
			fontWeight="extrabold"
			lineHeight="taller"
			letterSpacing="wide"
			color="gray.800"
		>
			{name}
		</chakra.h3>
	);
};

const ProductDesc = ({desc, ...props}) => {
	return (
		<chakra.p
			fontSize="sm"
			fontWeight="semibold"
			lineHeight="taller"
			letterSpacing="wide"
			color="gray.800"
			mb="2"
			{...props}
		>
			{desc}
		</chakra.p>
	);
};

const ProductPrice = ({text, dots, price}) => {
	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
	const printDots = () => {
		return '.'.repeat(isLargerThan800 ? dots.md : dots.base - price.length);
	};

	return (
		<chakra.p
			fontSize={{base: 'md', md: 'lg'}}
			fontWeight="semibold"
			lineHeight="taller"
			letterSpacing="widest"
		>
			{text}
			{printDots()}
			{price}
		</chakra.p>
	);
};

const PizzaPrices = ({products}) => {
	return (
		<>
			{products.map((product) => {
				return (
					<Box key={product.name}>
						<YellowBox>
							<Box p={2}>
								<ProductName name={product.name} />
								<ProductDesc desc={product.desc} />
							</Box>
							<PriceBox>
								<ProductPrice
									text={'CLASSIC'}
									dots={{base: 15, md: 15}}
									price={product.size.classic}
								/>
								<ProductPrice
									text="PREMIUM"
									dots={{base: 12, md: 12}}
									price={product.size.premium}
								/>
							</PriceBox>
						</YellowBox>
					</Box>
				);
			})}
		</>
	);
};

const Specialties = ({products}) => {
	return (
		<>
			{products.map((product) => {
				return (
					<Box key={product.name}>
						<YellowBox>
							<Box p={2}>
								<ProductName name={product.name} />
								<ProductDesc desc={product.desc} />
							</Box>
						</YellowBox>
					</Box>
				);
			})}
		</>
	);
};

const Others = ({products}) => {
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<>
			{products.map((product) => {
				return (
					<Box key={product.name}>
						<YellowBox>
							<Box p={2}>
								<ProductName name={product.name} />
								<Flex align="center" justify="center">
									<ProductDesc desc={product.desc} w={'xs'} />
								</Flex>
							</Box>
							<Spacer />
							<PriceBox>
								{Object.keys(product.size).map((key) => {
									const dots = 20 - key.length;
									return (
										<ProductPrice
											key={key}
											text={capitalizeFirstLetter(key)}
											dots={{base: dots, md: dots}}
											price={product.size[key]}
										/>
									);
								})}
							</PriceBox>
						</YellowBox>
					</Box>
				);
			})}
		</>
	);
};

const YellowBox = ({children}) => {
	return (
		<Flex
			bg="yellow.300"
			rounded={'3xl'}
			textColor={'gray.800'}
			p={1}
			maxW="sm"
			minH="full"
			flexDir="column"
		>
			{children}
		</Flex>
	);
};

const PriceBox = ({children}) => {
	return (
		<Box
			bg={'red.600'}
			borderBottomLeftRadius={'3xl'}
			borderBottomRightRadius={'3xl'}
			textColor={'white'}
			p={6}
		>
			{children}
		</Box>
	);
};

export default function Menu() {
	return (
		<Flex
			backgroundImage={pattern}
			py={{base: 1, md: 24}}
			px={{base: 1, md: 5}}
			w="auto"
			justifyContent="center"
			alignItems="center"
			flexDir="column"
		>
			<Container px={8} py={4} mx="auto" maxW="container.xl">
				{data.menu.map((item, i) => {
					if (i == 0 || i == 1)
						return (
							<MenuItem
								title={item.title}
								key={i}
								length={item.products.length}
							>
								<PizzaPrices products={item.products} />
							</MenuItem>
						);
					if (i == 2)
						return (
							<Box key={i}>
								{item.specialties.map((specialty, i) => {
									return (
										<MenuItem title={specialty.title} key={i}>
											<Specialties products={specialty.products} />
										</MenuItem>
									);
								})}
							</Box>
						);
					if (i == 3)
						return (
							<MenuItem title={'Others'} key={i} length={item.products.length}>
								<Others products={item.products} />
							</MenuItem>
						);
					if (i == 4)
						return (
							<MenuItem title={'Drinks'} key={i} length={item.drinks.length}>
								<Others products={item.drinks} />
							</MenuItem>
						);
				})}
			</Container>
			<Box alignSelf="center" fontSize="xs" mb={-20} textColor="blackAlpha.900">
				<a
					href="https://www.vecteezy.com/free-vector/pizza-pattern"
					target="_blank"
				>
					Pizza Pattern Vectors by Vecteezy
				</a>
			</Box>
		</Flex>
	);
}
