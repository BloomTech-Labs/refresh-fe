import React from 'react';
import styled from 'styled-components';

const BadgeContainer = styled.div`
width: 100%;
margin-bottom: auto;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;

` 
const BadgeText = styled.text`
position: absolute;
width: 6.6rem;
height: 1.5rem;
left: 3rem;
top: 23.3rem;
font-family: Catamaran;
font-style: normal;
font-weight: bold;
font-size: 1.6rem;
line-height: 1.5rem;
/* identical to box height, or 15px */
display: flex;
align-items: center;
letter-spacing: 0.07em;

/* main / menu text */

color: #B8B7E1;
`
const ViewAllText = styled.text `
position: absolute;
width: 4.1rem;
height: .9rem;
left: 28.9rem;
top: 23.7rem;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: .9rem;
/* or 9px */

display: flex;
align-items: center;
letter-spacing: 0.04em;

/* main / menu text */

color: #B8B7E1;
`

// const WaterBadge = styled.div`
// position: absolute;
// width: 3.5rem;
// height: 2.3rem;
// left: 3.2rem;
// top: 25.8rem;
// background-color: #1575FF;
// margin: 0.99rem 0;

// :before,
// :after {
//   content: "";
//   position: absolute;
//   width: 0;
//   border-left: 1.71rem solid transparent;
//   border-right: 1.71rem solid transparent;
// }

//  :before {
//   bottom: 100%;
//   border-bottom: 0.99rem solid #1575FF;
// }

// :after {
//   top: 100%;
//   width: 0;
//   border-top: 0.99rem solid #1575FF;
// }
// `
// const FoodBadge = styled.div`
// position: absolute;
// left: 11rem;
// top: 25.8rem;
// width: 3.5rem;
// height: 2.3rem;
// background-color: #27AE60;
// margin: 0.9925rem 0;

// :before,
// :after {
//   content: "";
//   position: absolute;
//   width: 0;
//   border-left: 1.71875rem solid transparent;
//   border-right: 1.71875rem solid transparent;
// }

//  :before {
//   bottom: 100%;
//   border-bottom: 0.9925rem solid #27AE60;
// }

// :after {
//   top: 100%;
//   width: 0;
//   border-top: 0.9925rem solid #27AE60;
// }
// `

// const ActivitySVG = styled.div`
// position: absolute;
// left: 18.8rem;
// top: 25.8rem;
// width: 3.5rem;
// height: 2.3rem;
// background-color: #FC5454;
// margin: 0.9925rem 0;

// :before,
// :after {
//   content: "";
//   position: absolute;
//   width: 0;
//   border-left: 1.71875rem solid transparent;
//   border-right: 1.71875rem solid transparent;
// }

//  :before {
//   bottom: 100%;
//   border-bottom: 0.9925rem solid #FC5454;
// }

// :after {
//   top: 100%;
//   width: 0;
//   border-top: 0.9925rem solid #FC5454;
// }

// `
// const PetsBadge = styled.div`
// position: absolute;
// left: 26.6rem;
// top: 25.8rem;
// width: 3.5rem;
// height: 2.3rem;
// background-color: #9B51E0;
// margin: 0.9925rem 0;


// :before,
// :after {
//   content: "";
//   position: absolute;
//   width: 0;
//   border-left: 1.71875rem solid transparent;
//   border-right: 1.71875rem solid transparent;
// }

//  :before {
//   bottom: 100%;
//   border-bottom: 0.9925rem solid #9B51E0;
// }

// :after {
//   top: 100%;
//   width: 0;
//   border-top: 0.9925rem solid #9B51E0;
// }

// `
// const PartialBadge = styled.div`
// position: absolute;
// left: 34.4rem;
// top: 25.8rem;
// width: 1.8rem;
// height: 2.3rem;
// background-color: #FC54EB;
// margin: 0.9925rem 0;


// :before,
// :after {
//   content: "";
//   position: absolute;
//   width: .1rem;
//   border-left: 1.71875rem solid transparent;
// }

//  :before {
//   bottom: 100%;
//   border-bottom: 0.9925rem solid #FC54EB;
// }

// :after {
//   top: 100%;
//   width: .1rem;
//   border-top: 0.9925rem solid #FC54EB;
// }

// `


const ProfileBadges = () => {
  return (
    <>
      <BadgeText>BADGES</BadgeText>
      <ViewAllText>view all &rsaquo;</ViewAllText>
      <BadgeContainer>
        {/* <WaterBadge/>  
      <FoodBadge/>
      <ActivitySVG/>
      <PetsBadge/> */}
      </BadgeContainer>
      {/* <PartialBadge/> */}
    </>
  );
};

export default ProfileBadges;
