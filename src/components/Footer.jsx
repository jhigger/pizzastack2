import {Box, Text, Flex, Image} from '@chakra-ui/react';
import Logo from '../assets/images/logo.webp';

export default function Footer() {
	return (
		<Box bg="blackAlpha.700" py={5}>
			<Flex
				align={'center'}
				_before={{
					content: '""',
					borderBottom: '1px solid',
					borderColor: 'whiteAlpha.700',
					flexGrow: 1,
					mr: 8
				}}
				_after={{
					content: '""',
					borderBottom: '1px solid',
					borderColor: 'whiteAlpha.700',
					flexGrow: 1,
					ml: 8
				}}
			>
				<Image src={Logo} alt="Logo" boxSize="8rem" objectFit="contain" />
			</Flex>
			<Text p={1} fontSize={'sm'} textAlign={'center'}>
				363 Legarda Rd, Baguio City, Benguet
			</Text>
			<Text p={1} fontSize={'sm'} textAlign={'center'}>
				&copy; 2022 PizzaStack&trade;. All rights reserved
			</Text>
		</Box>
	);
}
