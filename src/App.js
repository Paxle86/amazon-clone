import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CheckOut from './components/checkout/CheckOut';

function App() {
	return (
		<Router>
			<div className='app'>
				<Header />
				<Switch>
					<Route path='/checkout'>
						<CheckOut />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
