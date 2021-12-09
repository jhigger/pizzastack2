import {Box, Text, Flex, Image} from '@chakra-ui/react';
import Logo from '../assets/logo.png';

export default function LargeWithLogoCentered() {
	return (
		<Box bg={'gray.900'} color={'gray.200'}>
			<Box py={10}>
				<Flex
					align={'center'}
					_before={{
						content: '""',
						borderBottom: '1px solid',
						borderColor: 'gray.700',
						flexGrow: 1,
						mr: 8
					}}
					_after={{
						content: '""',
						borderBottom: '1px solid',
						borderColor: 'gray.700',
						flexGrow: 1,
						ml: 8
					}}
				>
					<Image src={Logo} alt="Logo" boxSize="10rem" objectFit="contain" />
				</Flex>
				<Text pt={6} fontSize={'sm'} textAlign={'center'}>
					© 2021 PizzaStack&trade;. All rights reserved
				</Text>
			</Box>
		</Box>
	);
}