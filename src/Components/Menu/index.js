import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {setDate} from '../../actions/date';
import {getDayMenu} from '../../actions/menu';
import Menu from './Menu';

export class MenuContainer extends Component {
    componentDidMount() {
    }

    changeDate = (currentDate) => {
        const date = moment(currentDate).format('YYYY-MM-DD');
        const currentLocation = this.props.currentLocation
        this.props.setDate(date);
        this.props.getDayMenu(date, currentLocation );
    };

    render() {
        return <Menu changeDate={this.changeDate} />;
    }
}

const mapStateToProps = (state) => {
    return {
        currentLocation : state.currentLocation
    };
};

export default connect(mapStateToProps, {
    setDate,
    getDayMenu
})(MenuContainer);
