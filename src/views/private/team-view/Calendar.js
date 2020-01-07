//react
import React, { useState, useEffect } from "react";
//moment js
import moment from "moment";
//styled-components
import styled from "styled-components";
const Calendar = props => {
  const [dateObj, setDateObj] = useState(moment());
  const [showDateTable, setShowDateTable] = useState(true);
  const [showMonthTable, setShowMonthTable] = useState(false);
  const [showYearTable, setShowYearTable] = useState(false);
  // drilling calendar props
  const { calendar, setCalendar, setTheDay } = props;

  //first weekday of a month getter
  let firstDayofMonth = () => {
    let firstDay = moment(dateObj)
      .startOf("month")
      .format("d");
    return firstDay;
  };

  //month picker
  let month = () => {
    return dateObj.format("MMMM");
  };

  //show month logic
  const showMonth = (e, month) => {
    setShowMonthTable(!showMonthTable);
    setShowDateTable(!showDateTable);
  };

  //select month logic
  let selectMonth = month => {
    let monthNo = moment.months().indexOf(month);
    let monthSelect = dateObj.set("month", monthNo);
    setDateObj(monthSelect);
    setShowMonthTable(!showMonthTable);
    setShowDateTable(!showDateTable);
  };

  //month table
  const MonthList = props => {
    let months = [];
    props.data.map(data => {
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            selectMonth(data);
          }}
        >
          <span>{data}</span>
        </td>
      );
    });
    let rows = [];
    let cells = [];
    months.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let monthlist = rows.map((d, i) => {
      return <tr key={i + "_monthlist_rows"}>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    );
  };

  //year getter
  const year = () => {
    return dateObj.format("Y");
  };

  //show year logic
  const showYear = (e, year) => {
    setShowYearTable(!showYearTable);
    setShowDateTable(!showDateTable);
  };

  //on previous and next logic
  const onPrev = () => {
    let curr = "";
    if (showYearTable === true) {
      curr = "year";
    } else {
      curr = "month";
    }
    setDateObj(dateObj.subtract(1, curr));
  };
  const onNext = () => {
    let curr = "";
    if (showYearTable == true) {
      curr = "year";
    } else {
      curr = "month";
    }
    setDateObj(dateObj.add(1, curr));
  };

  //set year logic
  let setYear = year => {
    let yearNo = moment(dateObj).set("year", year);
    setDateObj(yearNo);
    setShowMonthTable(!showMonthTable);
    setShowYearTable(!showYearTable);
  };

  //year table
  const getDates = (startDate, stopDate) => {
    let dateArray = [];
    let currentDate = moment(startDate);
    let stopD = moment(stopDate);
    while (currentDate <= stopD) {
      dateArray.push(moment(currentDate).format("YYYY"));
      currentDate = moment(currentDate).add(1, "year");
    }
    return dateArray;
  };
  const YearTable = props => {
    let years = [];
    let nexttwelve = moment()
      .set("year", props)
      .add("year", 12)
      .format("Y");

    let twelveyears = getDates(props, nexttwelve);

    twelveyears.map(data => {
      years.push(
        <td
          key={data}
          className="calendar-year"
          onClick={() => {
            setYear(data);
          }}
        >
          <span>{data}</span>
        </td>
      );
    });
    let rows = [];
    let cells = [];

    years.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let yearlist = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return (
      <table className="calendar-year">
        <thead>
          <tr>
            <th colSpan="4">Select a Year</th>
          </tr>
        </thead>
        <tbody>{yearlist}</tbody>
      </table>
    );
  };

  //highlighting current day
  let currentDay = () => {
    return dateObj.format("D");
  };

  const selectDay = d => {
    setTheDay(dateObj.date(d).format("MMMM Do YYYY"));
    setCalendar({ ...calendar });
  };

  let weekdayshort = moment.weekdaysShort();
  //short weekday logic
  let dayshortname = weekdayshort.map(day => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });

  //blank area before filling the first date of month
  let blanks = [];
  for (let i = 0; i < firstDayofMonth(); i++) {
    blanks.push(
      <td key={i + "_day"} className="calendar-day empty">
        {""}
      </td>
    );
  }

  //days in month
  let daysInMonth = [];
  for (let d = 1; d <= moment(dateObj).daysInMonth(); d++) {
    let currentDate = d === currentDay() ? "today" : "";
    daysInMonth.push(
      <td
        key={d + "_d_in_month"}
        className={`calendar-day ${currentDate}`}
        onClick={() => selectDay(d)}
      >
        <span>{d}</span>
      </td>
    );
  }
  //slots for calendar
  let totalSlots = [...blanks, ...daysInMonth];
  //   props.debug && console.log(totalSlots);
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
    return <tr key={i + "d_in_month_rows"}>{d}</tr>;
  });

  //render
  return (
    <CalendarHolder calendar={calendar.isOpen}>
      <MonthYear className="calendar-navi">
        <div onClick={onPrev}>&lt;</div>
        {!showMonthTable && <div onClick={showMonth}>{month()}</div>}
        <div onClick={showYear}>{year()}</div>
        <div onClick={onNext}>&gt;</div>
      </MonthYear>
      <div className="calendar-date">
        {showYearTable && <YearTable props={year()} />}
        {showMonthTable && <MonthList data={moment.months()} />}
      </div>
      {showDateTable && (
        <div className="calendar-date">
          <table className="calendar-day">
            <thead>
              <WeekDays>{dayshortname}</WeekDays>
            </thead>
            <tbody>{daysinmonth}</tbody>
          </table>
        </div>
      )}
    </CalendarHolder>
  );
};

const CalendarHolder = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px #35347f;
  background: #3d3b91;
  font-family: "Open Sans", Calibri, Arial, sans-serif;
  color: #ffffff;
  width: 100%;
  display: ${props => (props.calendar === false ? "none" : "flex")};

  .calendar-date {
    margin: 0;
    padding: 0;
    display: block;
  }
  .calendar-date table {
    width: 100%;
    margin: 0;
    padding: 0;
    border-spacing: 0;
    border-collapse: collapse;
  }
  .calendar-date table thead tr > *,
  .calendar-date table tbody tr > * {
    color: #a6a6a6;
    width: 35px;
    height: 35px;
    font-size: 12px;
    text-align: center;
    font-weight: normal;
    line-height: 35px;
    text-transform: uppercase;
  }
  .calendar-date table tbody tr > * {
    color: white;
    cursor: pointer;
    position: relative;
    font-size: 14px;
  }
  .calendar-date table tbody tr > * > span {
    color: inherit;
    z-index: 10;
    position: relative;
  }

  /* Select a Day */
  .calendar-date table tbody tr > *::after {
    top: 3px;
    left: 3px;
    width: 29px;
    height: 29px;
    content: "";
    display: block;
    position: absolute;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 50%;
    -webkit-border-radius: 50%;
  }
  .calendar-date table tbody tr > *.today {
    color: #e05cb3;
  }
  .calendar-date table tbody tr > *.today:after {
    border-color: #e05cb3;
  }
  .calendar-date table tbody tr > *:hover {
    color: white;
  }
  .calendar-date table tbody tr > *:hover:after {
    background-color: #e05cb3;
    mix-blend-mode: color-dodge;
  }
  .calendar-date table tbody tr > *.empty,
  .calendar-date table tbody tr > *.disable {
    color: white;
    cursor: not-allowed;
    background-color: #35347f;
  }
  .calendar-date table tbody tr > *.empty:hover:after,
  .calendar-date table tbody tr > *.disable:hover:after {
    content: "";
    display: none;
  }

  .calendar-date table tbody tr > *.current span {
    color: #fff;
  }

  .calendar-date table tbody tr > *.current:after {
    border-color: #e05cb3;
    background-color: #e05cb3;
  }
`;
const MonthYear = styled.div`
  display: flex;
  div {
    margin-right: 5%;
  }
`;
const WeekDays = styled.tr`
  color: rgba(204, 201, 255, 0.4);
  border-bottom: 1px solid rgba(204, 201, 255, 0.4);
`;
export default Calendar;
