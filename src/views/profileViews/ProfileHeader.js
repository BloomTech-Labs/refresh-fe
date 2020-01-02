import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import maxine from '../profileViews/maxine.jpg';
import notifications from '../../images/profile/notifications.svg';
import settings_cog from '../../images/profile/settings_cog.svg';
import {deviceType} from '../profileViews/ResponsiveMedia';


const Container = styled.div`
  height: 20px;
  margin: 0 25 0 25;


@media ${deviceType.smallMobile}{
 max-width: 100%;
  left: 44.8%;
  
}
@media ${deviceType.mediumMobile}{
 max-width: 100%;
  left: 44.8%;
  
}
@media ${deviceType.largeMobile} {
 max-width: 100%;
  left: 44.8%;
  
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

`
const User = styled.div`
position: absolute;
/* width: 100%; */
width: 5rem;
height: 5rem;
top: 8.5%;


@media ${deviceType.smallMobile}{
 max-width: 100%;
  left: 44.8%;
  left: 44.8%;
  
}
@media ${deviceType.mediumMobile}{
 max-width: 100%;
  left: 44.8%;
  left: 44.8%;
  
}
@media ${deviceType.largeMobile} {
  
 max-width: 100%;
  left: 44.8%;
  left: 44.8%;
  
}
`

const UserAv = styled.img`
position: absolute;
width: 5rem;
height: 5rem;
border-radius: 50%;
background: #C4C4C4;

@media ${deviceType.smallMobile}{
 max-width: 100%;
 /* left: 0; */
 
  
}
@media ${deviceType.mediumMobile}{
 max-width: 100%;
 /* left: 0; */
  
}
@media ${deviceType.largeMobile} {
 max-width: 100%;
 /* left: 0; */
  
}
`
const NameText = styled.text`
position: absolute;
width: 124px;
height: 9px;
/* left: 38.0%; */
/* top: 128px; */
left: 12.5rem;
top: 13.1rem;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 44%;
/* identical to box height, or 9px */

color: #E6E6E6;

@media ${deviceType.smallMobile}{
 max-width: 100%;
  /* left: 44.8%; */
  /* left: 38.2%; */
  
}
@media ${deviceType.mediumMobile}{
 max-width: 100%;
  /* left: 44.8%; */
  /* left: 38.2%; */
  /* right: 15%; */
  
}
@media ${deviceType.largeMobile} {
 max-width: 100%;
  /* left: 44.8%; */
  
}
`
const TeamLeadText = styled.div `
position: absolute;
width: 6.4rem;
height: 1.1rem;
/* padding-left:5%; */
/* margin-left: 0%; */
/* margin-right: 75%; */
top: 15.5rem;
left: 11.8rem;

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
  /* left: 44.8%; */
  
}
@media ${deviceType.mediumMobile}{
 max-width: 100%;
  /* left: 44.8%; */
  
}
@media ${deviceType.largeMobile} {
 max-width: 100%;
  /* left: 44.8%; */
  
}
`
const PointsText = styled.div`
position: absolute;
width: 5.4rem;
height: 1rem;
left: 20.2rem;
top: 15.5rem;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 93.19%;
/* or 10px */

display: flex;
/* align-items: flex-end; */
letter-spacing: 0.065em;

/* main / menu text */

color: #B8B7E1;
`

const LvOneText = styled.text`
position: absolute;
width: 2.5rem,;
height: 1.2rem;
left: 6.2rem;
top: 17.9rem;

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
width: 2.7rem;
height: 1.2rem;
left: 28.7rem;
top: 17.9rem;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 13px;
white-space: nowrap;
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
width: 16rem;
height: 0.7rem;
left: 10.7rem;
top: 18.2rem;

background: #E0B8D3;
opacity: 0.6;
border-radius: 3px;
`
const MockSlideTwo = styled.div`
position: absolute;
width: 5.2rem;
height: 0.7rem;
left: 10.7rem;
top: 18.2rem;

/* button / primary color */

background: #E05CB3;
border-radius: 3px;
`
const ProfileHeader = () => {
  
  return (
    <>
    
      <Container className='profile-container'>
        <BellVector src={notifications}/>
        <CogVector src={settings_cog}/>
        <User className="User">
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