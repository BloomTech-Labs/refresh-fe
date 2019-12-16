//IMPORTS
//react
import React from "react";
//styled components
import styled from "styled-components";

const Weight = props => {
  //handle change to store selected tick
  const handleChanges = e => {
    // console.log(e);
    props.setAnswer(e);
  };

  //Scale of numbers
  const sliderScale = (unit, range) => {
    let items = [];
    for (let i = 100; i < range; i++) {
      let n = 1;
      if (i % unit === 0) {
        items.push(
          <>
            <div className="bigtick tick" data-value={i}>
              <p onClick={() => handleChanges(i)}>
                <svg
                  width="3"
                  height="67"
                  viewBox="0 0 3 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.5"
                    y1="6.55671e-08"
                    x2="1.5"
                    y2="67"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </p>
              <NumberP>{i}</NumberP>
            </div>
            <div
              className="smalltick tick"
              data-value={i + n / 2 - 1}
              onClick={() => handleChanges(i + n / 2 - 1)}
            >
              <svg
                width="2"
                height="43"
                viewBox="0 0 2 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1"
                  y1="4.37114e-08"
                  x2="0.999998"
                  y2="43"
                  stroke="#CCC9FF"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </>
        );
      } else {
        items.push(
          <div className="smalltick" data-value={i + 0.5}>
            |
          </div>
        );
      }
    }
    return items;
  };

  //handle scroll for ticks
  const handleScroll = e => {
    let ticks = e.target.querySelectorAll(".tick");
    let mainDiv = e.target.getBoundingClientRect();
    ticks.forEach((tick, i) => {
      let centerTick = ticks[i].getBoundingClientRect();
      if (
        centerTick.x >= mainDiv.width / 2 + (mainDiv.width / 2) * 0.15 &&
        centerTick.x <= mainDiv.width / 2 + (mainDiv.width / 2) * 0.3
      ) {
        props.setAnswer(ticks[i].dataset.value);
        ticks[i].classList.add("active");
      } else {
        ticks[i].classList.remove("active");
      }
    });
  };

  //render
  return (
    <>
      <WeightContainer onScroll={handleScroll}>
        {sliderScale(1, 500).map((x, i) => (
          <DialStuff key={i}>{x}</DialStuff>
        ))}
      </WeightContainer>
    </>
  );
};

export default Weight;

// STYLED COMPONENTS
const WeightContainer = styled.div`
  max-width: 85vw;
  height: 15rem;
  margin-bottom: 6rem;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  overflow-x: auto;
  font-size: 2rem;

  .bigtick {
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
  }

  .smalltick {
    margin-top: -9rem;
    margin-left: 2rem;
  }

  .active {
    color: #e05cb3;
    p {
      color: #e05cb3;
    }
    svg {
      line {
        stroke: #e05cb3;
      }
    }
  }
`;
const DialStuff = styled.div`
  flex: 0 0 auto;
`;

const NumberP = styled.p`
  margin-left: -1rem;
  font-family: Catamaran;
  font-weight: bold;
  color: #ffffff;
  font-size: 1.6rem;
`;
