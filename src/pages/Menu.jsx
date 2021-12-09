import React from 'react';
import {
	chakra,
	Box,
	SimpleGrid,
	Flex,
	useColorModeValue,
	Container
} from '@chakra-ui/react';
import data from '../assets/menu.json';

const MenuItem = ({title, children}) => {
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
			<SimpleGrid columns={{base: 1, lg: 2}} spacingY={16} mt={6}>
				{children}
			</SimpleGrid>
		</Box>
	);
};

const PizzaPrices = ({products}) => {
	const classicDots = (times) => {
		return '.'.repeat(40 - times);
	};
	const premiumDots = (times) => {
		return '.'.repeat(37 - times);
	};

	return (
		<>
			{products.map((product) => {
				return (
					<Box textAlign="center" key={product.name}>
						<chakra.h3
							fontSize="lg"
							fontWeight="semibold"
							lineHeight="tall"
							letterSpacing="wide"
						>
							{product.name}
						</chakra.h3>
						<chakra.p
							fontSize="sm"
							fontWeight="thin"
							lineHeight="taller"
							letterSpacing="wider"
							mb="2"
						>
							{product.desc}
						</chakra.p>
						<chakra.p
							fontSize="md"
							fontWeight="light"
							lineHeight="taller"
							letterSpacing="widest"
						>
							Classic{classicDots(product.size.classic.length)}
							{product.size.classic}
						</chakra.p>
						<chakra.p
							fontSize="md"
							fontWeight="light"
							lineHeight="taller"
							letterSpacing="widest"
						>
							Premium{premiumDots(product.size.premium.length)}
							{product.size.premium}
						</chakra.p>
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
						<chakra.h3
							fontSize="lg"
							fontWeight="semibold"
							lineHeight="tall"
							letterSpacing="wide"
						>
							{product.name}
						</chakra.h3>
						<chakra.p
							fontSize="sm"
							fontWeight="thin"
							lineHeight="taller"
							letterSpacing="wider"
						>
							{product.desc}
						</chakra.p>
					</Box>
				);
			})}
		</>
	);
};

const Others = ({products}) => {
	const regularDots = (times) => {
		return '.'.repeat(40 - times);
	};
	const largeDots = (times) => {
		return '.'.repeat(43 - times);
	};

	return (
		<>
			{products.map((product) => {
				return (
					<Box textAlign="center" key={product.name}>
						<chakra.h3
							fontSize="lg"
							fontWeight="semibold"
							lineHeight="tall"
							letterSpacing="wide"
						>
							{product.name}
						</chakra.h3>
						<Flex align="center" justify="center">
							<chakra.p
								fontSize="sm"
								fontWeight="thin"
								lineHeight="taller"
								letterSpacing="wider"
								w={'xs'}
							>
								{product.desc}
							</chakra.p>
						</Flex>
						<chakra.p
							fontSize="md"
							fontWeight="light"
							lineHeight="taller"
							letterSpacing="widest"
						>
							Regular{regularDots(product.size.regular.length)}
							{product.size.regular}
						</chakra.p>
						{product.size.large && (
							<chakra.p
								fontSize="md"
								fontWeight="light"
								lineHeight="taller"
								letterSpacing="widest"
							>
								Large{largeDots(product.size.large.length)}
								{product.size.large}
							</chakra.p>
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
			bg={useColorModeValue('#F9FAFB', 'gray.600')}
			p={20}
			w="auto"
			justifyContent="center"
			alignItems="center"
		>
			<Container
				px={8}
				py={4}
				mx="auto"
				bg={useColorModeValue('white', 'gray.800')}
				shadow="xl"
				maxW="container.xl"
			>
				{data.menu.map((item, i) => {
					if (i == 0)
						return (
							<MenuItem title={item.title} key={i}>
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
