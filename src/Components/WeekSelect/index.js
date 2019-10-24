import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import WeekCalender from './WeekCalender';
import { setWeekDate } from '../../actions/date';
import { getWeekMenu } from '../../actions/menu';
import ExportToPdf from "../ExportToPdf"

const WeekSelect = (props) => {
	const selectWeekDates = (dates) => {
		const date = moment(dates[0]).format('YYYY-MM-DD');

		props.setWeekDate(date);
		props.getWeekMenu(date, props.currentLocationState);
	};

	return (
		<div>
			<WeekCalender selectWeekDates={selectWeekDates} />
			<p>WeekKalender orgineel</p>
			<p>WeekKalender copy</p>
			<p>weekMenu</p>
			<ExportToPdf />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		weekDates: state.weekDates,
		currentLocationState : state.currentLocation

	};
};

export default connect(mapStateToProps, { setWeekDate, getWeekMenu })(
	WeekSelect
);
