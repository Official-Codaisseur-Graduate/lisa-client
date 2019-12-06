import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getLocations } from "../../actions/locations";
import { setLocationId } from "../../actions/locations";
import { getDayMenu } from "../../actions/menu";
import { Alert, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SelectLocation.css";

class SelectLocation extends React.Component {
  state = {
    locationSelected: false,
    locationUpdated: false
  };

  componentDidMount() {
    this.props.getLocations();
  }

  updateSelection = event => {
    const selectedIndex = event.target.options.selectedIndex;
    let locationId = event.target.options[selectedIndex].getAttribute(
      "data-key"
    );
    // this.props.history.push(`/location/${locationId}`);
    this.props.setLocationId(locationId);
    //this.props.getDayMenu(this.props.date.date, locationId);
    this.state.locationSelected
      ? this.setState({ locationUpdated: true })
      : this.setState({ locationSelected: true });
    // this.setState({ locationSelected: true });
  };

  render() {
    const { locationSelected, locationUpdated } = this.state;

    const alertMessage = locationUpdated
      ? "Bijgewerkte locatie!"
      : "Geselecteerde locatie!";
    const alertVariant = locationUpdated ? "info" : "success";
    const buttonVariant = locationUpdated ? "outline-info" : "outline-success";
    // it would be cool if you can make the css opacity animation run everytime the location is updated

    const selectedMessage = locationSelected && (
      <Alert variant={alertVariant} className="mx-auto alert-message">
        <Alert.Heading>{alertMessage}</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-center">
          <Link to="/createDish">
            <Button variant={buttonVariant}>Gerecht toevoegen</Button>
          </Link>
          <Link to="/menu">
            <Button variant={buttonVariant}>Menu maken</Button>
          </Link>
        </div>
      </Alert>
    );

    return (
      <Fragment>
        <div className="select-location-wrapper">
          <select onChange={this.updateSelection}>
            <option value={""}>--Selecteer een locatie--</option>

            {this.props.locations.map(location => (
              <option
                key={location.id}
                data-key={location.id}
                value={location.name}
              >
                {location.name}
              </option>
            ))}
          </select>
          {selectedMessage}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.locationReducer,
    date: state.date,
    locationId: state.currentLocation
  };
};
//not sure if need getDayMenu here...
export default connect(mapStateToProps, {
  getLocations,
  setLocationId,
  getDayMenu
})(SelectLocation);
