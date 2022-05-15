import {Flex} from '@chakra-ui/react';

const YellowBox = ({children}) => {
	return (
		<Flex
			bg="yellow.300"
			rounded={'3xl'}
			textColor={'gray.800'}
			p={1}
			maxW="xs"
			minH="full"
			flexDir="column"
		>
			{children}
		</Flex>
	);
};

export default YellowBox;
