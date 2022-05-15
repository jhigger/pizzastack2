import {chakra, Box, SimpleGrid} from '@chakra-ui/react';

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

export default MenuItem;
