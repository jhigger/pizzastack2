import React from 'react';
import {Box, Flex, Container, Spacer} from '@chakra-ui/react';
import data from '../../assets/menu.json';
import pattern from '../../assets/images/pattern.jpg';
import MenuItem from './MenuItem';
import ProductName from './ProductName';
import ProductDesc from './ProductDesc';
import ProductPrice from './ProductPrice';
import YellowBox from './YellowBox';
import PriceBox from './PriceBox';

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
								{Object.keys(product.size).map((key) => {
									const dots = 20 - key.length;
									return (
										<ProductPrice
											key={key}
											text={key.toUpperCase()}
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
