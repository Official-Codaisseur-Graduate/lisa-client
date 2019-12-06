import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getLocations } from "../../actions/locations";
import { setLocationId } from "../../actions/locations";
import { getDayMenu } from "../../actions/menu";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class SelectLocation extends React.Component {
  state = {
    locationSelected: false
    // locationUpdated: false
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
    // this.state.locationSelected? this.setState({locationUpdated: true}) : this.setState({locationSelected: true})
    this.setState({ locationSelected: true });
  };

  render() {
    const selectedMessage = this.state.locationSelected && (
      <Alert
        variant="success"
        className="mx-auto"
        style={{ maxWidth: "500px", minHeight: "150px", margin: "60px auto" }}
      >
        <Alert.Heading>Geselecteerde locatie!</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-center">
          <Link to="/createDish">
            <Button variant="outline-success" style={{ margin: "10px" }}>
              Gerecht toevoegen
            </Button>
          </Link>
          <Link to="/menu">
            <Button variant="outline-success" style={{ margin: "10px" }}>
              Menu maken
            </Button>
          </Link>
        </div>
      </Alert>
    );

    return (
      <Fragment>
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
