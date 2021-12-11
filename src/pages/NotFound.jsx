import {Box, Heading, Text, Button} from '@chakra-ui/react';

export default function NotFound() {
	return (
		<Box textAlign="center" py={64}>
			<Heading
				display="inline-block"
				as="h2"
				size="2xl"
				bgGradient="linear(to-r, yellow.400, red.600)"
				backgroundClip="text"
			>
				404
			</Heading>
			<Text fontSize="18px" mt={3} mb={2}>
				Page Not Found
			</Text>
			<Text color={'gray.500'} mb={6}>
				The page you're looking for does not seem to exist
			</Text>

			<Button
				colorScheme="teal"
				bgGradient="linear(to-r, yellow.400, red.500)"
				color="white"
				variant="solid"
				_hover={{bg: 'yellow', textColor: 'black'}}
			>
				Go to Home
			</Button>
		</Box>
	);
}
