import React, { useState } from "react";
import moment from "moment";

const Calendar = props => {
  const [dateObj, setDateObj] = useState(moment());
  const [allMonths, setAllMonths] = useState(moment.months());

  let weekdayshort = moment.weekdaysShort();

  //short weekday logic
  let dayshortname = weekdayshort.map(day => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });

  //first weekday of a month getter
  let firstDayofMonth = () => {
    let firstDay = moment(dateObj)
      .startOf("month")
      .format("d");
    return firstDay;
  };

  //blank area before filling the first date of month
  let blanks = [];
  for (let i = 0; i < firstDayofMonth(); i++) {
    blanks.push(
      <td key={i} className="calendar-day empty">
        {""}
      </td>
    );
  }

  //highlighting current day
  let currentDay = () => {
    return dateObj.format("D");
  };

  //days in month
  let daysInMonth = [];
  for (let d = 1; d <= moment(dateObj).daysInMonth(); d++) {
    let currentDate = d == currentDay() ? "today" : "";
    daysInMonth.push(
      <td key={d} className={`calendar-day ${currentDate}`}>
        {d}
      </td>
    );
  }
  console.log(daysInMonth);
  //slots for calendar
  let totalSlots = [...blanks, ...daysInMonth];
  console.log(totalSlots);
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });

  let daysinmonth = rows.map((d, i) => {
    return <tr key={i}>{d}</tr>;
  });

  //month picker
  let month = () => {
    return dateObj.format("MMMM");
  };

  //month table
  let MonthList = props => {
    let months = [];
    props.data.map(data => {
      months.push(
        <td>
          <span>{data}</span>
        </td>
      );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);

    let monthlist = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });
  };

  return (
    <div>
      <h2>Calendar</h2>
      <div className="calendar-navi">{month()}</div>
      {/* <table className="calendar-month">
          <thead>
              <tr>
                  <th colSpan="4">Select a Month</th>
              </tr>
          </thead>
          <tbody>{monthlist}</tbody>
      </table> */}
      <table className="calendar-day">
        <thead>
          <tr>{dayshortname}</tr>
        </thead>
        <tbody>{daysinmonth}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
