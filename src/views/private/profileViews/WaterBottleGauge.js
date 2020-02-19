import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Atoms
import Icon from "../../../components/atoms/icon/icon";
// SVG Images
import bottleFull from "../../../images/profile/water_bottle/bottleFull.svg";
import bottle1 from "../../../images/profile/water_bottle/bottle1.svg";
import bottle2 from "../../../images/profile/water_bottle/bottle2.svg";
import bottle3 from "../../../images/profile/water_bottle/bottle3.svg";
import bottle4 from "../../../images/profile/water_bottle/bottle4.svg";
import bottle5 from "../../../images/profile/water_bottle/bottle5.svg";
import bottle6 from "../../../images/profile/water_bottle/bottle6.svg";
import bottle7 from "../../../images/profile/water_bottle/bottle7.svg";
import bottleEmpty from "../../../images/profile/water_bottle/bottleEmpty.svg";

const WaterBottleGauge = ({ children, ...props }) => {
  const { point_current } = props;

  const gaugeFill = () => {
    switch (true) {
      case point_current === 1:
        return (
          <Icon
            svg={bottle1}
            alt="1 serving of water"
            title="Current: 1 serving of water"
          />
        );
      case point_current === 2:
        return (
          <Icon
            svg={bottle2}
            alt="2 serving of water"
            title="Current: 2 serving of water"
          />
        );
      case point_current === 3:
        return (
          <Icon
            svg={bottle3}
            alt="3 serving of water"
            title="Current: 3 serving of water"
          />
        );
      case point_current === 4:
        return (
          <Icon
            svg={bottle4}
            alt="4 serving of water"
            title="Current: 4 serving of water"
          />
        );
      case point_current === 5:
        return (
          <Icon
            svg={bottle5}
            alt="5 serving of water"
            title="Current: 5 serving of water"
          />
        );
      case point_current === 6:
        return (
          <Icon
            svg={bottle6}
            alt="6 serving of water"
            title="Current: 6 serving of water"
          />
        );
      case point_current === 7:
        return (
          <Icon
            svg={bottle7}
            alt="7 serving of water"
            title="Current: 7 serving of water"
          />
        );
      case point_current >= 8:
        return (
          <Icon
            svg={bottleEmpty}
            alt="8+ servings of water"
            title="Current: Goal Complete!"
          />
        );
      default:
        return (
          <Icon
            svg={bottleFull}
            alt="0 servings of water"
            title="Current: 0 servings of water"
          />
        );
    }
  };
  props.debug && console.log(`[Before return]:`, point_current);

  return (
    <>
      <StyledGauge className="StyledGauge">
        <MobileCardWater className="MobileCardWater">
          {gaugeFill(point_current)}
        </MobileCardWater>
      </StyledGauge>
    </>
  );
};

const StyledGauge = styled.div`
  position: relative;
  height: 19rem;
  width: 14.9rem;
`;
const MobileCardWater = styled.div`
  position: absolute;
  width: 3.176rem;
  height: 5.8rem;
  left: 6.428rem;
  right: 6.396rem;
  top: 5.6rem;
  bottom: 7.6rem;
`;

export default WaterBottleGauge;
