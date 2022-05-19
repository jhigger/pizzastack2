import {chakra, useMediaQuery} from '@chakra-ui/react';

const ProductPrice = ({text, dots, price}) => {
	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
	const printDots = () => {
		return '.'.repeat(
			isLargerThan800 ? 15 - dots.md : 20 - dots.base - price.length
		);
	};

	return (
		<chakra.p
			fontSize={{base: 'md', md: 'lg'}}
			fontWeight="semibold"
			lineHeight="taller"
			letterSpacing="widest"
		>
			{text}
			{dots && printDots()}
			{price}
		</chakra.p>
	);
};

export default ProductPrice;
