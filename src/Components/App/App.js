import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Menu from '../Menu';
import WeekSelect from '../WeekSelect';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import {getLocations} from '../../actions/locationActions'

class App extends React.Component {
	componentDidMount() {
		this.props.getLocations()
		console.log('loca state', this.props.locationState)
	}

	state = {
		value: "",
		location: ""
	}

	updateSelection = (event) => {
		const selectedIndex = event.target.options.selectedIndex;
		let locationId = event.target.options[selectedIndex].getAttribute('data-key');
		this.setState({ location: locationId })
		this.props.history.push(`/location/${locationId}`);
	}

	render() {

		return (
			<div className="App">
				<header className="menuBar">
					<h1 className="appHeader">Vitalis Menu Editor</h1>
					<Link to={`/location/${this.state.location}`}><button>Hoofdpagina</button></Link>

					<select onChange={this.updateSelection}>
						<option value={""}>--Selecteer een locatie--</option>

						{this.props.locationState.map(location =>

							<option key={location.id} data-key={location.id}  value={location.location_name}>
								{location.location_name}
							</option>)}

					</select>
					<Link to="/week"><button>Week select</button></Link>
				</header>
				<Route exact path={`/location/:locationId`} component={Menu} />
				<Route path="/week" component={WeekSelect} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('location state in cont', state)

	return {
		locationState: state.locationReducer,

	}
}

export default connect(mapStateToProps, {getLocations})(withRouter(App));


