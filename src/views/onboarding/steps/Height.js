//imports
//react
import React from "react";
//styled components
import styled from "styled-components";

const Height = props => {
  //handle change to store selected tick
  const handleChanges = e => {
    console.log(e.target.dataset.value);
    props.setAnswer(e.target.dataset.value);
  };
  //Scale of numbers
  const sliderScale = (unit, range) => {
    let items = [];
    let feet = 3;
    let inches = 1;

    const inbetween = x => {
      let smalltick = [];
      for (let i = 0; i < x; i++) {
        smalltick.push(
          <span data-value={feet + "'" + inches + i * 0.25 + "''"}>
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
                data-value={feet + "'" + inches + i * 0.25 + "''"}
              />
            </svg>
          </span>
        );
      }
      return smalltick;
    };
    for (let i = 0; i < range; i++) {
      if (i % unit === 0) {
        //  items.push(<div className="bigtick">{feet}</div>)
        feet++;
        inches = 0;
      } else {
        items.push(
          <>
            <div
              className="bigtick"
              data-value={feet + "'" + inches + "''"}
              onClick={handleChanges}
            >
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
                  data-value={feet + "'" + inches + "''"}
                />
              </svg>
              <NumberP data-value={feet + "'" + inches + "''"}>{feet + "'" + inches + "''"}</NumberP>
            </div>
            <div
              className="smalltick"
              onClick={handleChanges}
            >
              {inbetween(4).map(x => x)}
            </div>
          </>
        );
        inches++;
      }
    }
    return items;
  };
  return (
    <>
      <WeightContainer>{sliderScale(13, 50).map((x, i) => x)}</WeightContainer>
    </>
  );
};

export default Height;

// STYLED COMPONENTS
const WeightContainer = styled.div`
  max-width: 29rem;
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
    color: black;
  }

  .smalltick {
    display: flex;
    svg {
      margin-right: 2rem;
    }
  }
`;
const DialStuff = styled.div`
  flex: 0 0 auto;
`;

const NumberP = styled.p`
  margin-left: -1rem;
  margin-right: 1rem;
  font-family: Catamaran;
  font-weight: bold;
  color: #ffffff;
  font-size: 1.6rem;
`;
