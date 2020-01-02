import React, {useContext} from 'react';
import { UserContext } from '../../contexts/UserContext';
import styled from 'styled-components';
import maxine from '../profileViews/maxine.jpg';
import notifications from '../../images/profile/notifications.svg';
import settings_cog from '../../images/profile/settings_cog.svg';


const BellVector = styled.img`
position: absolute;
width: 2rem;
height: 2rem;
left: 28.8rem;
top: 2.1rem;
`
const CogVector = styled.img`
position: absolute;
width: 2rem;
height: 2rem;
left: 32rem;
top: 2.1rem;
`

const User = styled.div`
position: absolute;
width: 6.4rem;
height: 6.4rem;
left: 16rem;
top: 5.1rem;
`

const UserAv = styled.img`
position: absolute;
width: 5rem;
height: 5rem;
border-radius: 50%;
background: #C4C4C4;
`

const NameText = styled.text`
position: absolute;
width: 12.4rem;
height: 0.9rem;
left: 12.5rem;
top: 13.1rem;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 2rem;
line-height: 0.9rem;
/* identical to box height, or 9px */

/* main / TEXT */

color: #E6E6E6;
`

const TeamLeadText = styled.div `
position: absolute;
width: 6.4rem;
height: 1.1rem;
left: 11.8rem;
top: 15.5rem;

font-family: Catamaran;
font-style: normal;
font-weight: bold;
font-size: 1.2rem;
line-height: 1.1rem;
/* or 11px */

display: flex;
align-items: flex-end;

/* button / primary color */

color: #E05CB3;
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
font-size: 1.1rem;
line-height: 1rem;
/* or 10px */

display: flex;
align-items: flex-end;
letter-spacing: 0.065em;

/* main / menu text */

color: #B8B7E1;
`

const LvOneText = styled.text`
position: absolute;
width: 10rem;
height: 1.2rem;
left: 6.2rem;
top: 17.9rem;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 1.3rem;
line-height: 1.2rem;
/* or 12px */
display: flex;
align-items: flex-end;
letter-spacing: 0.04em;

/* main / menu text */

color: #B8B7E1;
`
const LvTwoText = styled.div`
position: absolute;
width: 10rem;
height: 1.2rem;
left: 28.7rem;
top: 17.9rem;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 1.3rem;
line-height: 1.2rem;
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
height: .7rem;
left: 10.7rem;
top: 18.3rem;
background: #E0B8D3;
opacity: 0.6;
border-radius: .3rem;
`

const MockSlideTwo = styled.div`
position: absolute;
width: 5.2rem;
height: .7rem;
left: 10.7rem;
top: 18.3rem;
background: #E05CB3;
border-radius: .3rem;
`

const ProfileHeader = props => {

  // const activeUser = useContext(UserContext);

  // const routeToEdit = evt =>{
  //   evt.preventDefault();
  //   props.history.push('profile-edit');
  // }

  // const routeToDashboard = evt =>{
  //   evt.preventDefault();
  //   props.history.push('/dashboard');
  // }
  
  return (
    <>
        <BellVector src={notifications}  />
        <CogVector src={settings_cog} />
        <User>
          <UserAv src={maxine}></UserAv>
        </User>
        <NameText>Maxine Woods</NameText>
        <TeamLeadText>TEAM LEAD</TeamLeadText>
        <PointsText>150 points</PointsText>
        <LvOneText>Lvl 1</LvOneText>
        <LvTwoText>Lvl 2</LvTwoText>
        <MockSlideOne/>
        <MockSlideTwo/>
    </>
  )
};

export default ProfileHeader;