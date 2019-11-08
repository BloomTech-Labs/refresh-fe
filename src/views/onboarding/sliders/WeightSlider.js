import React, { useState } from "react";
import styled from "styled-components";

const sliderThumbStyles = props => `
width: 25px;
height: 25px;
background: ${props.color};
cursor: pointer;
outline: 5px solid #333;
opacity: ${props.opacity};
-webkit-transition: .2s;
transition: opacity .2s;

`;

const Styles = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  margin: 0 auto;

  padding: 20px;
  width: 80%;
  justify-content: space-between;

  .value {
    flex: 1;
    padding-left: 10px;
  }
  .slider {
    -webkit-appearance: none;
    width: 70%;
    height: 3px;
    outline: none;

    border-radius: 5px;
    display: flex;
    justify-content: center;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)};
    }
  }
`;

export default class Slider extends React.Component {
  state = {
    value: 150
  };

  handleOnChange = (e) => this.setState({value: e.target.value})

  render() {
    return (
      <Styles color={this.props.color} >
        <input
          type="range"
          min={75}
          max={475}
          value={this.state.value}
          className="slider"
          onChange={this.handleOnChange}
        />
        <div className="value">{this.state.value}</div>
      </Styles>
    );
  }
}

// function Slider(){
//   const [value, setValue] = useState({ value: "" });

//   const handleOnChange = e => {
//     e.preventDefault();
//     setValue({ ...value });
//   };

//   return (
//     <Styles color={value.color}>
//       <input
//         type="range"
//         min={75}
//         max={475}
//         value={value.value}
//         className="slider"
//         onChange={handleOnChange}
//       />
//       <div className="value">value</div>
//     </Styles>
//   );
// }



// export default Slider;
