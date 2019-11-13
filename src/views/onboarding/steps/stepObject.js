import React, {useState} from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";
import WHDial from "react-horizontal-scrolling-menu";
import WeightHeight from "./WeightHeight";

export const Step1 = profile => {
  console.log(profile);
  return (
    profile &&
    profile.form.map(
      i =>
        i.currentStep === profile.currentStep && (
          <OnBoardContainer key={i.currentStep}>
            <form onSubmit={profile.handleSubmit}>
              <Question>{i.question}</Question>
              {profile.currentStep <= 2 &&
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              }
              <WHDial 
              />
              <Button onClick={profile.handleSubmit}>Continue</Button>
              {profile.currentStep <= 2 && (
                <ButtonNoColor onClick={profile.handleSubmit}>
                  I don't feel comfortable answering
                </ButtonNoColor>
              )}
            </form>
          </OnBoardContainer>
        )
    )
  );
};

export const Step2 = profile => {
  return (
    profile &&
    profile.form.map(
      i =>
        i.currentStep === profile.currentStep && (
          <OnBoardContainer key={i.currentStep}>
            <form onSubmit={profile.handleSubmit}>
              <Question>{i.question}</Question>
              {profile.currentStep <= 2 &&
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              }
              <Button onClick={profile.handleSubmit}>Continue</Button>
              {profile.currentStep <= 2 && (
                <ButtonNoColor onClick={profile.handleSubmit}>
                  I don't feel comfortable answering
                </ButtonNoColor>
              )}
            </form>
          </OnBoardContainer>
        )
    )
  );
};

export const Step3 = profile => {
  return (
    profile &&
    profile.form.map(
      i =>
        i.currentStep === profile.currentStep && (
          <OnBoardContainer key={i.currentStep}>
            <form onSubmit={profile.handleSubmit}>
              <Question>{i.question}</Question>
              {profile.currentStep <= 2 &&
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              }
            <FlexHolder>
                <Option>Never</Option>
                <Option>Sometimes</Option>
                <Option>Always</Option>
            </FlexHolder>

              <Button onClick={profile.handleSubmit}>Continue</Button>
              {profile.currentStep <= 2 && (
                <ButtonNoColor onClick={profile.handleSubmit}>
                  I don't feel comfortable answering
                </ButtonNoColor>
              )}
            </form>
          </OnBoardContainer>
        )
    )
  );
};

export const Step4 = profile => {
  return (
    profile &&
    profile.form.map(
      i =>
        i.currentStep === profile.currentStep && (
          <OnBoardContainer key={i.currentStep}>
            <form onSubmit={profile.handleSubmit}>
              <LongQuestion>{i.question}</LongQuestion>
              {profile.currentStep <= 2 &&
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              }
              <StyledSlider
                defaultValue={[3]}
                max={7}
                renderTrack={Track}
                renderThumb={Thumb}
              />
              <Button onClick={profile.handleSubmit}>Continue</Button>
              {profile.currentStep <= 2 && (
                <ButtonNoColor onClick={profile.handleSubmit}>
                  I don't feel comfortable answering
                </ButtonNoColor>
              )}
            </form>
          </OnBoardContainer>
        )
    )
  );
};

export const Step5 = profile => {
  return (
    profile &&
    profile.form.map(
      i =>
        i.currentStep === profile.currentStep && (
          <OnBoardContainer key={i.currentStep}>
            <form onSubmit={profile.handleSubmit}>
              <LongQuestion>{i.question}</LongQuestion>
              {profile.currentStep <= 2 &&
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              }
            <StyledSlider
                defaultValue={[3]}
                max={7}
                renderTrack={Track}
                renderThumb={Thumb}
              />
              <Button onClick={profile.handleSubmit}>Continue</Button>
              {profile.currentStep <= 2 && (
                <ButtonNoColor onClick={profile.handleSubmit}>
                  I don't feel comfortable answering
                </ButtonNoColor>
              )}
            </form>
          </OnBoardContainer>
        )
    )
  );
};

export const Step6 = profile => {
  return (
    profile &&
    profile.form.map(
      i =>
        i.currentStep === profile.currentStep && (
          <OnBoardContainer key={i.currentStep}>
            <form onSubmit={profile.handleSubmit}>
              <LongQuestion>{i.question}</LongQuestion>
              {profile.currentStep <= 2 &&
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              }
            <StyledSlider
                defaultValue={[3]}
                max={7}
                renderTrack={Track}
                renderThumb={Thumb}
              />
              <Button onClick={profile.handleSubmit}>Continue</Button>
              {profile.currentStep <= 2 && (
                <ButtonNoColor onClick={profile.handleSubmit}>
                  I don't feel comfortable answering
                </ButtonNoColor>
              )}
            </form>
          </OnBoardContainer>
        )
    )
  );
};

export const Step7 = profile => {
  return (
    profile &&
    profile.form.map(
      i =>
        i.currentStep === profile.currentStep && (
          <OnBoardContainer key={i.currentStep}>
            <form onSubmit={profile.handleSubmit}>
              <LongQuestion>{i.question}</LongQuestion>
              {profile.currentStep <= 2 &&
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              }
                <StyledSlider
                defaultValue={[3]}
                max={7}
                renderTrack={Track}
                renderThumb={Thumb}
              />
              <Button onClick={profile.handleSubmit}>Continue</Button>
              {profile.currentStep <= 2 && (
                <ButtonNoColor onClick={profile.handleSubmit}>
                  I don't feel comfortable answering
                </ButtonNoColor>
              )}
            </form>
          </OnBoardContainer>
        )
    )
  );
};

export const Step8 = profile => {
  return (
    profile &&
    profile.form.map(
      i =>
        i.currentStep === profile.currentStep && (
          <OnBoardContainer key={i.currentStep}>
            <form onSubmit={profile.handleSubmit}>
              <LongQuestion>{i.question}</LongQuestion>
              {profile.currentStep <= 2 &&
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              }
            <StyledSlider
                defaultValue={[3]}
                max={7}
                renderTrack={Track}
                renderThumb={Thumb}
              />
              <Button onClick={profile.handleSubmit}>Continue</Button>
              {profile.currentStep <= 2 && (
                <ButtonNoColor onClick={profile.handleSubmit}>
                  I don't feel comfortable answering
                </ButtonNoColor>
              )}
            </form>
          </OnBoardContainer>
        )
    )
  );
};

export const Step9 = profile => {
  return (
    profile &&
    profile.form.map(
      i =>
        i.currentStep === profile.currentStep && (
          <OnBoardContainer key={i.currentStep}>
            <form onSubmit={profile.handleSubmit}>
              <LongQuestion>{i.question}</LongQuestion>
              {profile.currentStep <= 2 &&
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              }
                <StyledSlider
                defaultValue={[3]}
                max={7}
                renderTrack={Track}
                renderThumb={Thumb}
              />
              <Button onClick={profile.handleSubmit}>Continue</Button>
              {profile.currentStep <= 2 && (
                <ButtonNoColor onClick={profile.handleSubmit}>
                  I don't feel comfortable answering
                </ButtonNoColor>
              )}
            </form>
          </OnBoardContainer>
        )
    )
  );
};

export const Step10 = profile => {
  return (
    profile &&
    profile.form.map(
      i =>
        i.currentStep === profile.currentStep && (
          <OnBoardContainer key={i.currentStep}>
            <form onSubmit={profile.handleSubmit}>
              <LongQuestion>{i.question}</LongQuestion>
              {profile.currentStep <= 2 &&
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              }
            <StyledSlider
                defaultValue={[3]}
                max={7}
                renderTrack={Track}
                renderThumb={Thumb}
              />
              <Button onClick={profile.handleSubmit}>Continue</Button>
              {profile.currentStep <= 3 && (
                <ButtonNoColor onClick={profile.handleSubmit}>
                  I don't feel comfortable answering
                </ButtonNoColor>
              )}
            </form>
          </OnBoardContainer>
        )
    )
  );
};
// STYLED COMPONENTS
//Onboarding Reusable Styles
// we abstract out reusable global styles later on -JC
const MenuItem = ({ text, selected }) => {
    return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
  };

const Menu = list =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} />;
  });

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 0.2rem;
    margin: 8rem 0 13rem;
`;

const StyledThumb = styled.div`
    height: 2.5rem;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #28C96C;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
    margin-top:-1rem;
`;

const Thumb = (props, state) => <StyledThumb {...props}></StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props =>  props.index === 1 ? '#ddd' : '#28C96C'};
    border-radius: 2rem;
`;

const Track = (props, state) =>{console.log(state); return ( <StyledTrack {...props} index={state.index} value={7} />)};

const OnBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Catamaran", sans-serif;
  margin: auto;
  line-height: 1.5;
  background-color: #3a3699;
  color: #7f7cca;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding: 2.5rem 4rem;
`;
const Question = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  line-height: 4.9rem;
  letter-spacing: 3.5px;
  color: #ffffff;
  margin: 6rem 0 2rem;
`;

const LongQuestion = styled.h1`
font-weight: 600;
font-size: 2.5rem;
line-height: 4.1rem;
letter-spacing: 0.035em;
color: #ffffff;
margin: 6rem 0 2rem;`


const OnboardTxt = styled.p`
font-size: 1.6rem;
line-height: 2.6rem;
letter-spacing: 2px;
text-align:center
color: #A7A4E6;
margin: 0 auto;
`;

const Option = styled.a`
font-size: 1.6rem;
line-height:26px;
letter-spacing: 2px;
color: #FFFFFF;
&:hover {
    background: #28C96C;
    padding: 0 1rem;
    border-radius: 0.3rem;
  }
`

const Button = styled.a`
  display: flex;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width: 100%;
  text-align: center;
  margin: auto;
  background: #6487ff;
  color: white;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
`;
const ButtonNoColor = styled.a`
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: 2px;
  color: #a7a4e6;
`;
const FlexHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem auto;
  align-items: flex-start;
  width: 100%;
  padding: 2.5rem 0 9rem;
`;
