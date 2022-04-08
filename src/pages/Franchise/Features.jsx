import React from 'react';
import {
	chakra,
	Box,
	SimpleGrid,
	Flex,
	Icon,
	Heading,
	Divider
} from '@chakra-ui/react';
import {FaPizzaSlice} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {MdAutoGraph} from 'react-icons/md';

export default function Features() {
	const Feature = (props) => {
		return (
			<Box>
				<Icon boxSize={12} mb={6} aria-hidden="true" as={props.icon} />
				<chakra.h3 mb={4} fontSize="lg" lineHeight="short" fontWeight="bold">
					{props.title}
				</chakra.h3>
				<chakra.p lineHeight="tall">{props.children}</chakra.p>
			</Box>
		);
	};

	return (
		<Box p={{base: '6', md: '12'}}>
			<Heading fontSize={{base: '2xl', md: '4xl'}} mb={8}>
				World's First Pizza On A Cup
			</Heading>
			<Flex
				w="auto"
				justifyContent="center"
				alignItems="center"
				rounded="3xl"
				bg={'red.600'}
				flexDir="column"
			>
				<Heading fontSize={{base: 'xl', md: '3xl'}} m={8}>
					Why Franchise Pizza Stack?
				</Heading>
				<Divider borderColor="white" />
				<SimpleGrid
					columns={{base: 1, md: 2, lg: 3}}
					spacing={20}
					px={{base: 6, lg: 20, xl: 30}}
					py={12}
					mx="auto"
				>
					<Feature
						title="Unique recipe based on traditional Italian Neapolitan Pizza,
						localized for Filipino taste"
						icon={AiOutlineHeart}
					>
						Based on the true traditional Italian recipe from the master pizza
						makers at La Sorgente, Italy. The quality and taste is ahead of all
						others. Combined with Pizza Stack's unique award winning concept, it
						is the perfect meal, any place, anytime, even on the go!
					</Feature>

					<Feature
						title="Easy Franchise Operation... Simply Bake & Sell"
						icon={FaPizzaSlice}
					>
						Pizza Stack Franchise has an easy, smart and modern operation.
						<br /> All products delivered to stores are pre-packed and ready to
						use. This provides a perfect operation for quick baking using high
						quality baking equipment ready for the customer in only a few
						minutes.
					</Feature>

					<Feature
						title="ROI on the first year of business!"
						icon={MdAutoGraph}
					>
						Pizza Stack's generous gross margin means that all franchisees are
						forecast to meet their ROI within the first year of operation. Pizza
						Stack Franchise OPC also provides strong marketing strategy and
						support to all future franchisees.
					</Feature>
				</SimpleGrid>
				<Divider borderColor="white" />
				<Heading fontSize={{base: 'xl', md: '3xl'}} m={8}>
					Franchise Now!
				</Heading>
			</Flex>
		</Box>
	);
}
