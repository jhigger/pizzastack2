import {Text, useMediaQuery} from '@chakra-ui/react';

const ProductPrice = ({text, dots, price, ...props}) => {
	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
	const printDots = () => {
		return '.'.repeat(
			isLargerThan800 ? 15 - dots.md : 20 - dots.base - price.length
		);
	};

	return (
		<Text
			fontSize={{base: 'md', md: 'lg'}}
			fontWeight="semibold"
			lineHeight="taller"
			letterSpacing="widest"
			{...props}
		>
			{text}
			{dots && printDots()}
			{price}
		</Text>
	);
};

export default ProductPrice;
