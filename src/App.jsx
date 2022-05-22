import {lazy, Suspense} from 'react';
import {Switch, Route, useLocation, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import {AnimatePresence} from 'framer-motion';
import {Helmet} from 'react-helmet';
import logo from './assets/images/logo.webp';

const Menu = lazy(() => import('./routes/Menu'));
const About = lazy(() => import('./routes/About'));
const Contact = lazy(() => import('./routes/Contact'));
const Franchise = lazy(() => import('./routes/Franchise'));
const NotFound = lazy(() => import('./routes/NotFound'));
const Footer = lazy(() => import('./components/Footer'));

const Head = ({path}) => {
	const pageTitle =
		path != '/' ? ' | ' + path.charAt(1).toUpperCase() + path.slice(2) : '';
	const description =
		"The WORLD'S first on the go Pizza on a Cup. A revolutionary concept that makes it easy for pizza lovers to eat without tearing up a large pizza.";

	return (
		<Helmet>
			<title>{`PizzaStack${pageTitle}`}</title>
			<meta property="og:site_name" content={`PizzaStack${pageTitle}`} />
			<meta property="og:title" content={`PizzaStack${pageTitle}`} />
			<meta property="og:description" content={description} />
			<meta property="og:image" itemprop="image" content={logo} />
			<meta property="og:type" content="website" />
		</Helmet>
	);
};

function App() {
	let location = useLocation();

	return (
		<>
			<Head path={location.pathname} />
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
						<Route path="/404" component={NotFound} />
						<Redirect to="/404" />
					</Switch>
				</AnimatePresence>
				<Footer />
			</Suspense>
		</>
	);
}

export default App;
