import Hero from './Hero';
import Section1 from './Section1';
import Section2 from './Section2';
import PageTransition from '../../components/PageTransition';

export default function Home() {
	return (
		<PageTransition>
			<Hero />
			<Section1 />
			<Section2 />
		</PageTransition>
	);
}
