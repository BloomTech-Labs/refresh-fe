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
      <td key={i} className="calendar-day empty">
        {""}
      </td>
    );
  }

  //highlighting current day
  let currentDay = () => {
    return dateObj.format("D");
  };

  const selectDay = d =>{
      setSelectedDay(d);
      props.debug && console.log("selected day:", dateObj.date(d).format("dddd, MMMM Do YYYY, h:mm:ss a"))
  }

  //days in month
  let daysInMonth = [];
  for (let d = 1; d <= moment(dateObj).daysInMonth(); d++) {
    let currentDate = d === currentDay() ? "today" : "";
    daysInMonth.push(
      <td key={d} className={`calendar-day ${currentDate}`}>
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
    return <tr key={i}>{d}</tr>;
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
      return <tr key={i}>{d}</tr>;
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
      <MonthYear>
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
      </MonthYear>
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
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px #35347f;
  background: #3d3b91;
  font-family: "Catamaran", sans-serif;
  color: #ffffff;
`;

const MonthYear = styled.div`
  margin-top: 50%;
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
