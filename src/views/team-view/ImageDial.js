//IMPORTS
//react
import React, {useState, useEffect} from "react";
//styled components
import styled from "styled-components";
import axios from "axios";

const ImageDial = props => {
    const [thumb, setThumb] = useState();

    useEffect(()=>{
        axios.get("https://dog.ceo/api/breed/husky/images")
        .then(res =>{
            console.log(res.data.message[0]);
            setThumb(res.data.message)
        })
    }, [])
  //handle change to store selected tick
  const handleChanges = e => {
    console.log(e);
  };

  //Scale of numbers
  const sliderScale = (unit, range) => {
    let items = [];
    for (let i = 0; i < range; i++) {
      {thumb &&
        items.push(
          <>
            <div className="bigtick tick" > 
              <img src={thumb[i]} />
            </div>
          </>
        );
      } 
    }
    return items;
  };

  //handle scroll for ticks
  const handleScroll = e => {
  console.log(e.target);
  };

  //render
  return (
    <>
      <ImgContainer onScroll={handleScroll}>
        {sliderScale(1, 15).map((x, i) => (
          <DialStuff key={i}>{x}</DialStuff>
        ))}
      </ImgContainer>
    </>
  );
};

export default ImageDial;

// STYLED COMPONENTS
const ImgContainer = styled.div`
  max-width: 85vw;
  height: calc(100vh / 4);
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-self: center;
  align-items: center;
  overflow-x: auto;
  font-size: 2rem;

  .bigtick {
    display: flex;
    flex-direction: column;
    margin-left: 5rem;

    img{
        max-width:100%;
        width: 5rem;
        max-height:100%;
        height:5rem;
        border-radius: 50%;
    }
  }

  .smalltick {
    margin-top: -7rem;
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
