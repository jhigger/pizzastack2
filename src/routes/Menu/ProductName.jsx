import {chakra} from '@chakra-ui/react';

const ProductName = ({name}) => {
	return (
		<chakra.h3
			fontSize={{base: 'xl', md: '3xl'}}
			fontWeight="extrabold"
			lineHeight="taller"
			letterSpacing="wide"
			color="gray.800"
		>
			{name}
		</chakra.h3>
	);
};

export default ProductName;
