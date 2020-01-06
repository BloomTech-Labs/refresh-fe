//react
import React, { useState } from "react";
//moment js
import moment from "moment";
//styled-components
import styled from "styled-components";

const Calendar = props => {
  const [dateObj, setDateObj] = useState(moment());
  const [selectedDay, setSelectedDay] = useState();   // eslint-disable-line no-unused-vars
  const [showMonthTable, setShowMonthTable] = useState(false);
  const [showYearTable, setShowYearTable] = useState(false);

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
      <td key={i + "_day"} className="calendar-day empty">
        {""}
      </td>
    );
  }

  //highlighting current day
  let currentDay = () => {
    return dateObj.format("D");
  };

  const selectDay = d =>{
      setSelectedDay(dateObj.date(d).format("dddd, MMMM Do YYYY, h:mm:ss a"));
      // console.log("selected day:", dateObj.date(d).format("dddd, MMMM Do YYYY, h:mm:ss a"))
      console.log(selectedDay);
  }

  //days in month
  let daysInMonth = [];
  for (let d = 1; d <= moment(dateObj).daysInMonth(); d++) {
    let currentDate = d === currentDay() ? "today" : "";
    daysInMonth.push(
      <td key={d + "_d_in_month"} className={`calendar-day ${currentDate}`}>
          <span onClick={() => selectDay(d)}>
          {d}
          </span>
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

  //month picker
  let month = () => {
    return dateObj.format("MMMM");
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

    //select month logic
    let selectMonth = month => {
      let monthNo = moment(dateObj)
        .month(month)
        .month();
      dateObj.set("month", monthNo);
      setDateObj(dateObj);
      setShowMonthTable(!showMonthTable);
    };

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

  const showMonth = (e, month) => {
    setShowMonthTable(!showMonthTable);
  };

  //year getter
  const year = () => {
    return dateObj.format("Y");
  };

  //year table
  const YearTable = props => {
    let years = [];
    let nexttwelve = moment()
      .set("year", props)
      .add("year", 12)
      .format("Y");

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

    let setYear = year => {
      let yearNo = moment(dateObj)
        .year(year)
        .year();
      dateObj.set("year", yearNo);
      setDateObj(dateObj);
      setShowYearTable(!showYearTable);
    };

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

  const showYear = (e, year) => {
    setShowYearTable(!showYearTable);
  };

  const onPrev = () => {
      let curr = "";
      if(showYearTable === true){
          curr = "year";
      } else {
          curr = "month"
      }
      setDateObj(dateObj.subtract(1, curr))
  };
  const onNext = () => {
    let curr = "";
    if(showYearTable == true){
        curr = "year";
    } else {
        curr = "month"
    }
    setDateObj(dateObj.add(1, curr))
  };
  //render
  return (
    <CalendarHolder>
      <div  className="calendar-navi">
        <div
          onClick={() => {
            onPrev();
          }}
        >
          &lt;
        </div>
        <div
          className="calendar-navi"
          onClick={() => {
            showMonth();
          }}
        >
          {month()}
        </div>{" "}
        <div
          onClick={() => {
            showYear();
          }}
        >
          {year()}
        </div>
        <div
          onClick={onNext}
        >
          &gt;
        </div>
      </div>
      {showMonthTable && <MonthList data={moment.months()} />}
      {showYearTable && <YearTable props={year()} />}
      {!showMonthTable && !showYearTable && (
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
width: 245px;
height: auto;
margin: 15px;
padding: 0;
display: block;
overflow: hidden;
position: absolute;
border-collapse: separate;
font-family: "Open Sans", Calibri, Arial, sans-serif;
background-color:  #4742bc;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3125);
-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3125);
border-radius: 3px;
-webkit-border-radius: 3px;
   ::after {
    clear: both;
    content: "";
    display: block;
    font-size: 0;
    visibility: hidden;
  }
   .calendar-static {
    margin-left: auto;
    margin-right: auto;
  }
    .calendar-navi {
    width: 100%;
    margin: 0;
    padding: 0;
    display: table;
    border-spacing: 0;
    border-collapse: separate;
    background-color: #cd283c;
    border-radius: 3px 3px 0 0;
    -webkit-border-radius: 3px 3px 0 0;
  }
    .calendar-navi div {
    cursor: pointer;
    color: #fff;
    margin: 0;
    padding: 0;
    display: table-cell;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.15);
    background-repeat: no-repeat;
    background-position: center center;
  }
    .calendar-navi div:first-child,
    .calendar-navi div:last-child {
    width: 35px;
    padding: 0 0 5px 0;
    font-size: 22px;
  }
    .calendar-navi div:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
    .calendar-navi div.button-prev {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC\
      9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgNiAxNiI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iT\
      TYgMkwwIDhsNiA2VjJ6Ii8+PC9zdmc+");
  }
    .calendar-navi div.button-next {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC\
      9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgNiAxNiI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iT\
      TAgMTRsNi02LTYtNnYxMnoiLz48L3N2Zz4=");
  }
    .calendar-navi div.button-check {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC\
      9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkP\
      SJNMTIgNWwtOCA4LTQtNCAxLjUtMS41TDQgMTBsNi41LTYuNUwxMiA1eiIvPjwvc3ZnPg==");
  }
    .calendar-navi div.button-close {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC\
      9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkP\
      SJNNy40OCA4bDMuNzUgMy43NS0xLjQ4IDEuNDhMNiA5LjQ4bC0zLjc1IDMuNzUtMS40OC0xLjQ4TDQuNTIgOCAuNzcgNC4y\
      NWwxLjQ4LTEuNDhMNiA2LjUybDMuNzUtMy43NSAxLjQ4IDEuNDhMNy40OCA4eiIvPjwvc3ZnPg==");
  }
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
    color:  #4742bc;
    width: 35px;
    height: 35px;
    padding: 0;
    font-size: 12px;
    text-align: center;
    font-weight: normal;
    line-height: 35px;
    border: 0;
    background-color: #223344;
  }
    .calendar-date table tbody tr > * {
    color: #334455;
    cursor: pointer;
    position: relative;
    font-size: 14px;
    background-color:  #4742bc;
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
    color:  #4742bc;
  }
    .calendar-date table tbody tr > *.today:after {
    border-color:  #4742bc;
  }
    .calendar-date table tbody tr > *:hover {
    color: #cd283c;
  }
    .calendar-date table tbody tr > *:hover:after {
    border-color: #cd283c;
  }
    .calendar-date table tbody tr > *.empty,
    .calendar-date table tbody tr > *.disable {
    color: #8899aa;
    cursor: not-allowed;
    background-color: #efefef;
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
    border-color:  #4742bc;
    background-color:  #4742bc;
  }
  /* Select A Month */
    .calendar-date table.calendar-month tbody tr > * {
    width: 81.66666666666667px;
    padding: 5px;
    line-height: 25px;
  }
    .calendar-date table.calendar-month tbody tr > * span {
    display: block;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 3px;
    -webkit-border-radius: 3px;
  }
   
    .calendar-date
    table.calendar-month
    tbody
    tr
    > *:hover
    span {
    border-color: #d0d0d0;
    box-shadow: 0 1px 0 0 #efefef;
    -webkit-box-shadow: 0 1px 0 0 #efefef;
  }
  /* Select a Time */
    .calendar-time {
    width: 100%;
    margin: 0;
    padding: 0;
    display: table;
    text-align: center;
    background-color:  #4742bc;
    border-radius: 0 0 3px 3px;
    -webkit-border-radius: 0 0 3px 3px;
  }
    .calendar-date + .calendar-time {
    border-top: 1px solid #d0d0d0;
    background-color: #f8f8f8;
  }
    .calendar-time .calendar-field {
    width: 33.3333333333%;
    padding: 10px 0;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: top;
  }
    .calendar-time .calendar-field:first-child {
    text-align: right;
  }
    .calendar-time .calendar-field:first-child:after {
    top: 12px;
    right: -10px;
    content: ":";
    position: absolute;
  }
    .calendar-time .calendar-field:last-child {
    text-align: left;
  }
    .calendar-time .calendar-field:last-child:after {
    top: 12px;
    left: -10px;
    content: ":";
    position: absolute;
  }
    .calendar-time .calendar-field input[type="number"] {
    width: 100%;
    max-width: 50px;
    margin: 0;
    padding: 3px 4px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    border-color: #d0d0d0;
    background-color:  #4742bc;
    border-radius: 3px;
    -webkit-border-radius: 3px;
  }
   
    .calendar-time
    .calendar-field
    input[type="number"]:hover {
    border-color: #a0a0a0;
  }
   
    .calendar-time
    .calendar-field
    input[type="number"]:focus {
    border-color:  #4742bc;
  }
    .calendar-time .calendar-field label {
    color: #778899;
    margin: 5px 0 0 0;
    padding: 0;
    display: block;
    font-size: 12px;
    line-height: 12px;
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
