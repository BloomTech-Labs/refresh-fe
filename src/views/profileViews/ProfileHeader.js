import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import maxine from '../profileViews/maxine.jpg';
import notifications from '../../images/profile/notifications.svg';
import settings_cog from '../../images/profile/settings_cog.svg';
import {deviceType} from '../profileViews/ResponsiveMedia';


const Container = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;  
margin-bottom: auto;


@media ${deviceType.smallMobile}{
  max-width: 100%;
  
}
@media ${deviceType.mediumMobile}{
  max-width: 100%;
  
}
@media ${deviceType.largeMobile} {
  max-width: 100%;
  
}
`
const BellVector = styled.img`
position: absolute;
width: 25px;
height: 25px;
left: 78.53%;
right: 6.4%;
top: 2.71%;
bottom: 94.95%;
`
const CogVector = styled.img`
position: absolute;
left: 88.53%;
right: 6.4%;
top: 2.71%;
bottom: 94.95%;
/* main / disabled */
`
const User = styled.div`
width: 100%;
margin: 0 auto;
border-radius: 50%;
width: 5rem;
height: 5rem;
left: 3.2%;
top: 8.5%;
@media ${deviceType.smallMobile}{
  max-width: 100%;
  
}
@media ${deviceType.mediumMobile}{
  max-width: 100%;
  
}
@media ${deviceType.largeMobile} {
  
  left: 65.2%;
  
}
`

const UserAv = styled.img`
position: relative;
width: 5rem;
height: 5rem;
border-radius: 50%;
background-img:
url('maxine.jpg');
background: #C4C4C4;
@media ${deviceType.smallMobile}{
  max-width: 100%;
  
}
@media ${deviceType.mediumMobile}{
  max-width: 100%;
  
}
@media ${deviceType.largeMobile} {
  
  left: 65.2%;
  
}
`
const NameText = styled.text`
position: absolute;
width: 124px;
height: 9px;
left: 38.0%;
top: 131px;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 44%;
/* identical to box height, or 9px */


/* main / TEXT */

color: #E6E6E6;

@media ${deviceType.smallMobile}{
  max-width: 100%;
  
}
@media ${deviceType.mediumMobile}{
  max-width: 100%;
  
}
@media ${deviceType.largeMobile} {
  max-width: 100%;
  
}
`
const TeamLeadText = styled.div `
position: absolute;
width: 75px;
height: 11px;
left: 35.0%;
top: 24.8%;

font-family: Catamaran;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 93.19%;
/* or 11px */

display: flex;
align-items: flex-end;

/* button / primary color */

color: #E05CB3;

@media ${deviceType.smallMobile}{
  max-width: 100%;
  
}
@media ${deviceType.mediumMobile}{
  max-width: 100%;
  
}
@media ${deviceType.largeMobile} {
  max-width: 100%;
  
}
`
const PointsText = styled.div`
position: absolute;
width: 54px;
height: 10px;
left: 46.5%;
top: 24.8%;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 93.19%;
/* or 10px */

display: flex;
align-items: flex-end;
letter-spacing: 0.065em;

/* main / menu text */

color: #B8B7E1;
`

const LvOneText = styled.text`
position: absolute;
width: 35px;
height: 12px;
left: 122px;
top: 179px;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 93.19%;
/* or 12px */

display: flex;
align-items: flex-end;
letter-spacing: 0.04em;

/* main / menu text */

color: #B8B7E1;
`
const LvTwoText = styled.div`
position: absolute;
width: 32px;
height: 12px;
left: 347px;
top: 179px;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 93.19%;
/* or 12px */

display: flex;
align-items: flex-end;
letter-spacing: 0.04em;

/* main / menu text */

color: #B8B7E1;
`

const MockSlideOne = styled.img`
position: absolute;
width: 160px;
height: 7px;
left: 165px;
top: 183px;

background: #E0B8D3;
opacity: 0.6;
border-radius: 3px;
`
const MockSlideTwo = styled.div`
position: absolute;
width: 52px;
height: 7px;
left: 165px;
top: 183px;

/* button / primary color */

background: #E05CB3;
border-radius: 3px;
`
const ProfileHeader = () => {
  
  return (
    <>
    
      <Container>
        <BellVector src={notifications}/>
        <CogVector src={settings_cog}/>
        <User>
          <Link to='/'><UserAv src={maxine}></UserAv></Link>
        </User>
        <NameText>Maxine Woods</NameText>
        <TeamLeadText>TEAM LEAD</TeamLeadText>
        <PointsText>150 points</PointsText>
        <LvOneText>Lvl 1</LvOneText>
        <LvTwoText>Lvl 2</LvTwoText>
        <MockSlideOne/>
        <MockSlideTwo/>
      </Container>
      
    </>
  )
};

export default ProfileHeader;