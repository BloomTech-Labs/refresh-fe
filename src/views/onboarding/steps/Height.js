import React from "react";
import styled from "styled-components";

const Height = props => {

  const handleChanges = e => {
    console.log(e);
    props.setAnswer(e);
   
  };
  const sliderScale = (unit, range) => {
    let items = [];
    let b =0;
    for (let i = 4; i < range; i+= (0.012 * 6)) {
      b++
      console.log(b);
        items.push(
          <>
            <div className="bigtick">
              <p onClick={() => handleChanges(i)
              // {
              //   const decimal = i.toString().split('.')
              //   console.log(parseInt("." + decimal[1]))
              // }
              }>
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
              <NumberP>{i.toFixed(1).toString().replace(/\./g, "'")}''</NumberP>
            </div>
            <div className="smalltick" onClick={() => handleChanges(i)}>
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
                  strokeidth="2"
                />
              </svg>
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
    }
    return items;
  };
  return (
    <>
      <WeightContainer>
        {sliderScale(2, 8).map((x, i) => (
          <DialStuff key={i}>{x}</DialStuff>
        ))}
      </WeightContainer>
    </>
  );
};

export default Height;

const WeightContainer = styled.div`
  max-width: 29rem;
  height: 15rem;
  margin-bottom:6rem;
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
    margin-top: -9rem;
    margin-left: 2rem;
        svg{
            margin-right:2rem;
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
color: #FFFFFF;
font-size: 1.6rem;
`
