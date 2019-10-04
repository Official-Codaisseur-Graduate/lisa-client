import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Menu from '../Menu';
import WeekSelect from '../WeekSelect';

function App() {
	return (
		<div className="App">
			<header className="menuBar">
				<h1 className="appHeader">Vitalis Menu Editor</h1>
				<Link to="/week">Week select</Link>
			</header>
			<Route exact path to="/" component={Menu} />
			<Route to="/week" component={WeekSelect} />
		</div>
	);
}

export default App;
