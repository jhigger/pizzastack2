import {Box, Flex, Container} from '@chakra-ui/react';
import data from '../../assets/menu.json';
import pattern from '../../assets/images/pattern.webp';
import MenuRow from './MenuRow';
import ProductName from './ProductName';
import ProductDesc from './ProductDesc';
import ProductPrice from './ProductPrice';
import YellowBox from './YellowBox';
import PriceBox from './PriceBox';
import ProductImage from './ProductImage';
import PageTransition from '../../components/PageTransition';
import {motion} from 'framer-motion';

const AnimatedBox = ({children, index, ...props}) => {
	return (
		<Box
			as={motion.div}
			initial="hidden"
			whileInView="visible"
			viewport={{once: true}}
			transition={{duration: index}}
			variants={{
				visible: {opacity: 1, y: '0%'},
				hidden: {opacity: 0, y: `${25 + index * 25}%`}
			}}
			{...props}
		>
			{children}
		</Box>
	);
};

const ItemPrices = ({products, toUpper = true}) => {
	return (
		<>
			{products.map((product, index) => {
				return (
					<AnimatedBox key={product.name} index={index}>
						<YellowBox>
							<Box p={2}>
								<ProductName name={product.name} />
								<ProductDesc desc={product.desc} />
							</Box>
							{product.image && (
								<ProductImage
									image={product.image}
									alt={product.name}
									loading={index < 3 ? 'eager' : 'lazy'}
								/>
							)}
							<PriceBox>
								{Object.keys(product.size).map((key) => {
									return (
										<ProductPrice
											key={key}
											text={key}
											casing={toUpper && 'uppercase'}
											dots={{base: key.length, md: key.length}}
											price={product.size[key]}
										/>
									);
								})}
							</PriceBox>
						</YellowBox>
					</AnimatedBox>
				);
			})}
		</>
	);
};

const Specialties = ({products}) => {
	return (
		<>
			{products.map((product, index) => {
				return (
					<AnimatedBox key={product.name} index={index}>
						<YellowBox>
							<Box p={2}>
								<ProductName name={product.name} />
								<ProductDesc desc={product.desc} />
							</Box>
						</YellowBox>
					</AnimatedBox>
				);
			})}
		</>
	);
};

export default function Menu() {
	// Preload image before render
	new Image().src = pattern;

	return (
		<PageTransition>
			<Flex
				backgroundImage={pattern}
				p={{base: 1, md: 5}}
				w="auto"
				justifyContent="center"
				alignItems="center"
				flexDir="column"
			>
				<Container px={8} py={4} pb={24} mx="auto" maxW="container.xl">
					{data.menu.map((item, i) => {
						if (i == 0 || i == 1)
							return (
								<MenuRow
									title={item.title}
									key={i}
									length={item.products.length}
								>
									<ItemPrices products={item.products} />
								</MenuRow>
							);
						if (i == 2)
							return (
								<Box key={i}>
									{item.specialties.map((specialty, i) => {
										return (
											<MenuRow title={specialty.title} key={i}>
												<Specialties products={specialty.products} />
											</MenuRow>
										);
									})}
								</Box>
							);
						if (i == 3)
							return (
								<MenuRow
									title={item.title}
									key={i}
									length={item.products.length}
								>
									<ItemPrices products={item.products} />
								</MenuRow>
							);
						if (i == 4)
							return (
								<MenuRow
									title={item.title}
									key={i}
									length={item.products.length}
								>
									<ItemPrices products={item.products} toUpper={false} />
								</MenuRow>
							);
					})}
				</Container>
				<Box alignSelf="center" fontSize="xs" mb={-10}>
					<a
						href="https://www.vecteezy.com/free-vector/pizza-pattern"
						target="_blank"
					>
						Pizza Pattern Vectors by Vecteezy
					</a>
				</Box>
			</Flex>
		</PageTransition>
	);
}
