import React from "react";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
// components
import Icon from "../../../components/atoms/icon/icon";
// badge images
import { badgeData } from "./badgeData";

const BadgeHub = styled.div`
  position: absolute;
  top: 27.8rem;
  left: 3rem;
  height: 7rem;
  width: 100%;
`;
const BadgeText = styled.p`
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

  color: #b8b7e1;
`;
const ViewAllText = styled.p`
  position: absolute;
  width: 4.1rem;
  height: 0.9rem;
  left: 28.9rem;
  top: 23.7rem;

  font-family: Catamaran;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 0.9rem;
  /* or 9px */

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  /* main / menu text */

  color: #b8b7e1;
`;

const styles = {
  root: {
    marginTop: 0
  },
  slideContainer: {
    width: "5.775rem",
    marginRight: "2.1rem",
    marginTop: 0
  },
  slide: {
    marginTop: 0
  }
};
const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);


const ProfileBadges = () => {
  return (
    <>
      <BadgeText>BADGES</BadgeText>
      <ViewAllText>view all &rsaquo;</ViewAllText>
      <BadgeHub className={`badge-hub`}>
        <BindKeyboardSwipeableViews
          className="swipeable-views"
          style={styles.root}
          slideStyle={styles.slideContainer}
        >
          {badgeData.map(badge => {
            return (
              <Icon
                className={`${badge.category} icon`}
                key={badge.id}
                badge={badge.id}
                svg={badge.svg}
                alt={badge.alt}
                width={5.775}
                height={6.55}
              />
            );
          })}
        </BindKeyboardSwipeableViews>
      </BadgeHub>
    </>
  );
};

export default ProfileBadges;
