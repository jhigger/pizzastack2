import React, {useRef} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Franchise from './pages/Franchise/Franchise';
import NotFound from './pages/NotFound';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './App.css';

function App() {
	let location = useLocation();

	return (
		<>
			<Navbar />
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
