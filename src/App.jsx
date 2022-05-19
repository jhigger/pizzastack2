import {lazy, Suspense} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import {AnimatePresence} from 'framer-motion';

const Menu = lazy(() => import('./routes/Menu'));
const About = lazy(() => import('./routes/About'));
const Contact = lazy(() => import('./routes/Contact'));
const Franchise = lazy(() => import('./routes/Franchise'));
const NotFound = lazy(() => import('./routes/NotFound'));

function App() {
	let location = useLocation();

	return (
		<>
			<Navbar path={location.pathname} />
			<Suspense fallback={<></>}>
				<AnimatePresence exitBeforeEnter initial={false}>
					<Switch location={location} key={location.pathname}>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/menu" component={Menu} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/franchise" component={Franchise} />
						<Route path="*" component={NotFound} />
					</Switch>
				</AnimatePresence>
				<Footer />
			</Suspense>
		</>
	);
}

export default App;
