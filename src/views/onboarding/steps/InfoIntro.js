import React from 'react';

const InfoIntro = (props) => {
return(
    <OnBoardWrapper>
    <OnBoardContainer>
        <Refresh>We need to learn a little more about you</Refresh>
        <OnboardTxt>We just need some data to set up your profile. All of your information will stay private.</OnboardTxt>
        <Button>Continue</Button>
    </OnBoardContainer>
</OnBoardWrapper>
)
}

export default InfoIntro;