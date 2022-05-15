import {chakra} from '@chakra-ui/react';

const ProductDesc = ({desc, ...props}) => {
	return (
		<chakra.p
			fontSize="sm"
			fontWeight="semibold"
			lineHeight="taller"
			letterSpacing="wide"
			color="gray.800"
			mb="2"
			{...props}
		>
			{desc}
		</chakra.p>
	);
};

export default ProductDesc;
