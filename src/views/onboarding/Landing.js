import React from 'react';
import { OnBoardWrapper, OnBoardContainer, OnboardTxt, FlexHolder, Button, Refresh, ButtonNoColor, Logo } from '../../styles/global/GlobalStyle';
import onboardlogo from '../../images/refresh-yo-guy.svg';
const Landing = () => {
    return(
        <OnBoardWrapper>
        <OnBoardContainer>
            <Logo src={onboardlogo} />
            <FlexHolder>
                <Refresh>Refresh</Refresh>
                <OnboardTxt>Made for students,<br /> by students.</OnboardTxt>
                <br />
                <OnboardTxt>Because success starts with the <br /> body in mind.</OnboardTxt>
            </FlexHolder>
            <FlexHolder>
                <Button>Get Started</Button>
                <ButtonNoColor>I already have an account</ButtonNoColor>
            </FlexHolder>
      </OnBoardContainer>
      </OnBoardWrapper>
    )
}

export default Landing; 