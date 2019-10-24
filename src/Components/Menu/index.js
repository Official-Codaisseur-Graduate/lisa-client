import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import Menu from './Menu';

import {setDate} from '../../actions/date';
import {getDayMenu} from '../../actions/menu';

export class MenuContainer extends Component {
    componentDidMount() {

    }

    changeDate = (currentDate) => {
        const {locationId} = this.props.match.params;

        const date = moment(currentDate).format('YYYY-MM-DD');
        // Set date in Redux Store
        this.props.setDate(date);

        // Get-request to get all dishes for this date
        this.props.getDayMenu(date, locationId);
    };

    render() {
        const {locationId} = this.props.match.params;
        return <Menu changeDate={this.changeDate} locationIdentifier={locationId}/>;
    }
}

export default connect(null, {
    setDate,
    getDayMenu
})(MenuContainer);
