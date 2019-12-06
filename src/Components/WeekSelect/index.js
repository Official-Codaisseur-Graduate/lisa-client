import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import WeekCalender from "./WeekCalender";
import { setWeekDate } from "../../actions/date";
import { getWeekMenu } from "../../actions/menu";
import ExportToPdf from "../ExportToPdf";

const WeekSelect = props => {
  const selectWeekDates = dates => {
    const date = moment(dates[0]).format("YYYY-MM-DD");

    props.setWeekDate(date);
    props.getWeekMenu(date, props.currentLocation);
  };

  return (
    <div>
      <WeekCalender selectWeekDates={selectWeekDates} />
      <p>weekMenu</p>
			<p>Selecteer een week om het weekmenu in PDF te bekijken.</p>
      <ExportToPdf />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weekDates: state.weekDates,
    currentLocation: state.currentLocation
  };
};

export default connect(mapStateToProps, { setWeekDate, getWeekMenu })(
  WeekSelect
);
