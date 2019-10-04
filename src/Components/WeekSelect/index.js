import React from 'react';
import { connect } from 'react-redux';

import WeekCalender from './WeekCalender';
import { setWeekDate } from '../../actions/date';
import { getWeekMenu } from '../../actions/menu';

const WeekSelect = (props) => {
	const selectWeekDates = (dates) => {
		props.setWeekDate(dates[0]);
		props.getWeekMenu(dates[0]);
	};

	return (
		<div>
			<WeekCalender selectWeekDates={selectWeekDates} />
			<p>WeekKalender orgineel</p>
			<p>WeekKalender copy</p>
			<p>weekMenu</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		weekDates: state.weekDates
	};
};

export default connect(mapStateToProps, { setWeekDate, getWeekMenu })(
	WeekSelect
);
