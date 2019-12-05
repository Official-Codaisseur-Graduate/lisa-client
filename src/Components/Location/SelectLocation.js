import React from "react";
import { connect } from "react-redux";
import { getLocations } from "../../actions/locationActions";
import { setLocationId } from "../../actions/currentLocation";
import { getDayMenu } from "../../actions/menu";

class SelectLocation extends React.Component {
  componentDidMount() {
    this.props.getLocations();
  }

  updateSelection = event => {
    const selectedIndex = event.target.options.selectedIndex;
    let locationId = event.target.options[selectedIndex].getAttribute(
      "data-key"
    );
    this.props.history.push(`/location/${locationId}`);
    this.props.setLocationId(locationId);
    //this.props.getDayMenu(this.props.date.date, locationId);
  };

  render() {
    return (
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
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.locationReducer,
    date: state.date
  };
};
//not sure if need getDayMenu here...
export default connect(mapStateToProps, {
  getLocations,
  setLocationId,
  getDayMenu
})(SelectLocation);
