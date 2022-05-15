import {chakra} from '@chakra-ui/react';

const ProductName = ({name}) => {
	return (
		<chakra.h3
			fontSize={{base: 'xl', md: '2xl'}}
			fontWeight="extrabold"
			lineHeight="taller"
			letterSpacing="widest"
			color="gray.800"
		>
			{name}
		</chakra.h3>
	);
};

export default ProductName;
