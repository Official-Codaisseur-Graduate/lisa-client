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
				<Link to='/'><button>Hoofdpagina</button></Link>
				<Link to="/week"><button>Week select</button></Link>
			</header>
			<Route exact path="/" component={Menu} />
			<Route path="/week" component={WeekSelect} />
		</div>
	);
}

export default App;
