import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import PageTransition from '../../components/PageTransition';

export default function Home() {
	return (
		<PageTransition>
			<Header />
			<Section1 />
			<Section2 />
		</PageTransition>
	);
}
