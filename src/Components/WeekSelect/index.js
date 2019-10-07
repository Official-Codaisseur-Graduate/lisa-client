import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import WeekCalender from './WeekCalender';
import { setWeekDate } from '../../actions/date';
import { getWeekMenu } from '../../actions/menu';

const WeekSelect = (props) => {
	const selectWeekDates = (dates) => {
		const date = moment(dates[0]).format('YYYY-MM-DD');

		props.setWeekDate(date);
		props.getWeekMenu(date);
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
