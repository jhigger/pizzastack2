import {chakra, useMediaQuery} from '@chakra-ui/react';

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

export default ProductPrice;
