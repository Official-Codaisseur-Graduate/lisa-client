import React, { useState } from 'react';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

function getWeekDays(weekStart) {
	const days = [ weekStart ];
	for (let i = 1; i < 7; i += 1) {
		days.push(moment(weekStart).add(i, 'days').toDate());
	}
	return days;
}

function getWeekRange(date) {
	return {
		from: moment(date).startOf('isoWeek').toDate(),
		to: moment(date).endOf('isoWeek').toDate()
	};
}

const Example = (props) => {
	const [ state, setTest ] = useState({
		hoverRange: undefined,
		selectedDays: []
	});

	const handleDayChange = (date) => {
		// console.log('test', getWeekDays(getWeekRange(date).from));
		props.selectWeekDates(getWeekDays(getWeekRange(date).from));
		setTest({
			...state,
			selectedDays: getWeekDays(getWeekRange(date).from)
		});
	};

	const handleDayEnter = (date) => {
		setTest({
			...state,
			hoverRange: getWeekRange(date)
		});
	};

	const handleDayLeave = () => {
		setTest({
			...state,
			hoverRange: undefined
		});
	};

	const handleWeekClick = (weekNumber, days, e) => {
		setTest({
			...state,
			selectedDays: days
		});
	};

	const { hoverRange, selectedDays } = state;

	const daysAreSelected = selectedDays.length > 0;

	const modifiers = {
		hoverRange,
		selectedRange: daysAreSelected && {
			from: selectedDays[0],
			to: selectedDays[6]
		},
		hoverRangeStart: hoverRange && hoverRange.from,
		hoverRangeEnd: hoverRange && hoverRange.to,
		selectedRangeStart: daysAreSelected && selectedDays[0],
		selectedRangeEnd: daysAreSelected && selectedDays[6]
	};

	return (
		<div className="SelectedWeekExample">
			<DayPicker
				selectedDays={selectedDays}
				showWeekNumbers
				showOutsideDays
				modifiers={modifiers}
				onDayClick={handleDayChange}
				onDayMouseEnter={handleDayEnter}
				onDayMouseLeave={handleDayLeave}
				onWeekClick={handleWeekClick}
				firstDayOfWeek={1}
			/>
			{selectedDays.length === 7 && (
				<div>
					{moment(selectedDays[0]).format('LL')} –{' '}
					{moment(selectedDays[6]).format('LL')}
				</div>
			)}
		</div>
	);
};

export default Example;
