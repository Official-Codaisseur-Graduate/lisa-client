import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import Menu from './Menu';

import {setDate} from '../../actions/date';
import {getDayMenu} from '../../actions/menu';

export class MenuContainer extends Component {
    componentDidMount() {
        //console.log('loc id params match', this.props.match.params.locationId)
    }

    changeDate = (currentDate) => {

        const date = moment(currentDate).format('YYYY-MM-DD');
        // Set date in Redux Store
        this.props.setDate(date);

        // Get-request to get all dishes for this date
        this.props.getDayMenu(date, this.props.currentLocationState);
    };

    render() {
        return <Menu changeDate={this.changeDate} />;
    }
}

const mapStateToProps = (state) => {
    return {
        currentLocationState : state.currentLocation
    };
};

export default connect(mapStateToProps, {
    setDate,
    getDayMenu
})(MenuContainer);
