import {chakra, Flex} from '@chakra-ui/react';

const ProductDesc = ({desc, ...props}) => {
	return (
		<Flex align="center" justify="center">
			<chakra.p
				fontSize="sm"
				fontWeight="semibold"
				lineHeight="taller"
				letterSpacing="normal"
				color="gray.800"
				mb={2}
				w="2xs"
				{...props}
			>
				{desc}
			</chakra.p>
		</Flex>
	);
};

export default ProductDesc;
