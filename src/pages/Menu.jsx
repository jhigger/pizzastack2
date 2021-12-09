import React from 'react';
import {chakra, Box, SimpleGrid, Flex, Container} from '@chakra-ui/react';
import data from '../assets/menu.json';

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
			>
				{title}
			</chakra.p>
			<SimpleGrid columns={{base: 1, md: 2, lg: cols}} spacingY={16} mt={6}>
				{children}
			</SimpleGrid>
		</Box>
	);
};

const ProductName = ({name}) => {
	return (
		<chakra.h3
			fontSize="lg"
			fontWeight="semibold"
			lineHeight="tall"
			letterSpacing="wide"
			color="red"
		>
			{name}
		</chakra.h3>
	);
};

const ProductDesc = ({desc, ...props}) => {
	return (
		<chakra.p
			fontSize="sm"
			fontWeight="thin"
			lineHeight="taller"
			letterSpacing="wider"
			color="yellow"
			mb="2"
			{...props}
		>
			{desc}
		</chakra.p>
	);
};

const ProductPrice = ({text, dots, price}) => {
	const printDots = () => {
		return '.'.repeat(dots - price.length);
	};

	return (
		<chakra.p
			fontSize="md"
			fontWeight="light"
			lineHeight="taller"
			letterSpacing="widest"
			color="white"
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
					<Box textAlign="center" key={product.name}>
						<ProductName name={product.name} />
						<ProductDesc desc={product.desc} />
						<ProductPrice
							text={'Classic'}
							dots={40}
							price={product.size.classic}
						/>
						<ProductPrice
							text="Premium"
							dots={37}
							price={product.size.premium}
						/>
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
					<Box textAlign="center" key={product.name}>
						<ProductName name={product.name} />
						<ProductDesc desc={product.desc} />
					</Box>
				);
			})}
		</>
	);
};

const Others = ({products}) => {
	return (
		<>
			{products.map((product) => {
				return (
					<Box textAlign="center" key={product.name}>
						<ProductName name={product.name} />
						<Flex align="center" justify="center">
							<ProductDesc desc={product.desc} w={'xs'} />
						</Flex>
						<ProductPrice
							text={'Regular'}
							dots={40}
							price={product.size.regular}
						/>
						{product.size.large && (
							<ProductPrice text="Large" dots={43} price={product.size.large} />
						)}
					</Box>
				);
			})}
		</>
	);
};

export default function Menu() {
	return (
		<Flex
			bg={'gray.600'}
			py={24}
			px={5}
			w="auto"
			justifyContent="center"
			alignItems="center"
		>
			<Container
				px={8}
				py={4}
				mx="auto"
				bg={'gray.800'}
				shadow="xl"
				maxW="container.xl"
			>
				{data.menu.map((item, i) => {
					if (i == 0)
						return (
							<MenuItem
								title={item.title}
								key={i}
								length={item.products.length}
							>
								<PizzaPrices products={item.products} />
							</MenuItem>
						);
					if (i == 1)
						return (
							<MenuItem title={item.title} key={i}>
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
							<MenuItem title={'Others'} key={i}>
								<Others products={item.products} />
							</MenuItem>
						);

					if (i == 4)
						return (
							<MenuItem title={item.title} key={i}>
								<Others products={item.products} />
							</MenuItem>
						);
					if (i == 5)
						return (
							<MenuItem title={'Others'} key={i}>
								<Others products={item.products} />
							</MenuItem>
						);
				})}
			</Container>
		</Flex>
	);
}
