import {Switch, Route, useLocation} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Menu from './routes/Menu';
import About from './routes/About';
import Contact from './routes/Contact';
import Franchise from './routes/Franchise';
import NotFound from './routes/NotFound';

function App() {
	let location = useLocation();

	return (
		<>
			<Navbar path={location.pathname} />
			<TransitionGroup>
				<CSSTransition key={location.pathname} classNames="fade" timeout={500}>
					<Switch location={location}>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/menu" component={Menu} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/franchise" component={Franchise} />
						<Route path="*" component={NotFound} />
					</Switch>
				</CSSTransition>
			</TransitionGroup>
			<Footer />
		</>
	);
}

export default App;
