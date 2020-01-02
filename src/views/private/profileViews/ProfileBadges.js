import React from "react";
import styled from "styled-components";
import { deviceType } from "../profileViews/ResponsiveMedia";
//import ActivityBadge from '../../../images/badges/activity_badge.svg'
import Badge from "../../../components/molecules/badges/Badges";

const BadgeContainer = styled.div`
  position: absolute;
  top: 23.3rem;
  left: 3rem;
  width: 37.175rem;
  height: 9.05rem;
  margin-bottom: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;

  @media ${deviceType.smallMobile} {
    max-width: 100%;
  }
  @media ${deviceType.mediumMobile} {
    max-width: 100%;
  }
  @media ${deviceType.largeMobile} {
    max-width: 100%;
  }
`;
const BadgeText = styled.text`
  position: absolute;
  /* padding-left: 3%; */
  width: 6.6rem;
  height: 1.5rem;
  left: 4rem;
  top: 22rem;

  font-family: Catamaran;
  font-style: normal;
  font-weight: bold;
  /* font-size: 1.6rem; */
  line-height: 93.19%;
  /* identical to box height, or 15px */

  display: flex;
  align-items: center;
  letter-spacing: 0.07em;

  /* main / menu text */

  color: #b8b7e1;
`;
const ViewAllText = styled.text`
  position: absolute;
  width: 4.1rem;
  height: 0.9rem;
  /* padding-left: 2%; */
  left: 28.9rem;
  top: 22.3rem;

  font-family: Catamaran;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 93.19%;
  /* or 9px */

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  /* main / menu text */

  color: #b8b7e1;
`;

const WaterBadge = styled.div`
  left: 19%;
  top: 258px;
  position: absolute;
  width: 55px;
  height: 31.75px;
  background-color: #1575ff;
  margin: 15.88px 0;

  :before,
  :after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 27.5px solid transparent;
    border-right: 27.5px solid transparent;
  }

  :before {
    bottom: 100%;
    border-bottom: 15.88px solid #1575ff;
  }

  :after {
    top: 100%;
    width: 0;
    border-top: 15.88px solid #1575ff;
  }
`;
const FoodBadge = styled.div`
  position: absolute;
  left: 34.8%;
  top: 258px;
  width: 55px;
  height: 31.75px;
  background-color: #27ae60;
  margin: 15.88px 0;

  :before,
  :after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 27.5px solid transparent;
    border-right: 27.5px solid transparent;
  }

  :before {
    bottom: 100%;
    border-bottom: 15.88px solid #27ae60;
  }

  :after {
    top: 100%;
    width: 0;
    border-top: 15.88px solid #27ae60;
  }
`;

const ActivitySVG = styled.div`
  position: absolute;
  left: 51.9%;
  top: 258px;
  width: 55px;
  height: 31.75px;
  background-color: #fc5454;
  margin: 15.88px 0;

  :before,
  :after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 27.5px solid transparent;
    border-right: 27.5px solid transparent;
  }

  :before {
    bottom: 100%;
    border-bottom: 15.88px solid #fc5454;
  }

  :after {
    top: 100%;
    width: 0;
    border-top: 15.88px solid #fc5454;
  }
`;
const PetsBadge = styled.div`
  position: absolute;
  left: 68%;
  top: 258px;
  width: 55px;
  height: 31.75px;
  background-color: #9b51e0;
  margin: 15.88px 0;

  :before,
  :after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 27.5px solid transparent;
    border-right: 27.5px solid transparent;
  }

  :before {
    bottom: 100%;
    border-bottom: 15.88px solid #9b51e0;
  }

  :after {
    top: 100%;
    width: 0;
    border-top: 15.88px solid #9b51e0;
  }
`;
const PartialBadge = styled.div`
  position: absolute;
  left: 84%;
  top: 258px;
  width: 55px;
  height: 31.75px;
  background-color: #fc54eb;
  margin: 15.88px 0;

  :before,
  :after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 27.5px solid transparent;
    border-right: 27.5px solid transparent;
  }

  :before {
    bottom: 100%;
    border-bottom: 15.88px solid #fc54eb;
  }

  :after {
    top: 100%;
    width: 0;
    border-top: 15.88px solid #fc54eb;
  }
`;

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
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
      </BadgeContainer>
      {/* <PartialBadge/> */}
    </>
  );
};

export default ProfileBadges;
