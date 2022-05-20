import {lazy, Suspense} from 'react';
import {Box, Container, Image} from '@chakra-ui/react';
import PageTransition from '../../components/PageTransition';
import why from '../../assets/images/why.webp';

const Form = lazy(() => import('./Form'));

export default function Franchise() {
	return (
		<PageTransition>
			<Box py={{base: 12, md: 24}} bg="black">
				<Container
					maxW="container.xl"
					justify="center"
					align="center"
					p={{base: 1, md: 12}}
					mb={8}
				>
					<Image
						loading="eager"
						objectFit="cover"
						src={why}
						alt="Why franchise?"
						w="full"
						borderRadius="xl"
					/>
				</Container>
				<Suspense fallback={<></>}>
					<Form />
				</Suspense>
			</Box>
		</PageTransition>
	);
}
