import {Box} from '@chakra-ui/react';

const PriceBox = ({children}) => {
	return (
		<Box
			bg={'red.600'}
			borderBottomLeftRadius={'3xl'}
			borderBottomRightRadius={'3xl'}
			textColor={'white'}
			p={6}
		>
			{children}
		</Box>
	);
};

export default PriceBox;
