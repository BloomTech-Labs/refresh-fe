import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import axios from "axios";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
// Atoms
import Icon from "../../components/atoms/icon/icon";
// SVG Images
import bottleFull from "../../images/profile/water_bottle/bottleFull.svg";
import bottle1 from "../../images/profile/water_bottle/bottle1.svg";
import bottle2 from "../../images/profile/water_bottle/bottle2.svg";
import bottle3 from "../../images/profile/water_bottle/bottle3.svg";
import bottle4 from "../../images/profile/water_bottle/bottle4.svg";
import bottle5 from "../../images/profile/water_bottle/bottle5.svg";
import bottleEmpty from "../../images/profile/water_bottle/bottleEmpty.svg";

const WaterBottleGauge = ({ children, ...props }) => {
  const [waterData, setWaterData] = useState({
    waterStats: 0
  });
  console.log(`[waterData before useEffect]`, waterData);

  // useEffect axios call for user stats
  useEffect(() => {
    axiosWithAuth()
      .get(`/usermissions`)
      .then(res => {
        console.log(`user_missions response:`, res);
        let missionsInProgress = res.data.user_missions.missions_in_progress;
        !Array.isArray(missionsInProgress)
          ? console.log(`No missions currently in progress`)
          : missionsInProgress.forEach(mission => {
              console.log(`[Mission after map]`, mission);
              mission.vertical.toLowerCase() === "water"
                ? setWaterData({
                    waterStats: mission.point_current
                  })
                : console.log(`[No water data / end of map]`);
            });
      });
  }, []);

  console.log(`[waterData after useEffect]`, waterData);
  // console.log(`[waterStats after useEffect]`, waterStats);

  const gaugeFill = () => {
    console.log(`[waterData inside gaugeFill]`, waterData);
    switch (true) {
      case waterData.waterStats === 1:
        return (
          <Icon
            svg={bottle1}
            alt="1 serving of water"
            title="Current: 1 serving of water"
          />
        );
      case waterData.waterStats === 2:
        return (
          <Icon
            svg={bottle2}
            alt="2 serving of water"
            title="Current: 2 serving of water"
          />
        );
      case waterData.waterStats === 3:
        return (
          <Icon
            svg={bottle3}
            alt="3 serving of water"
            title="Current: 3 serving of water"
          />
        );
      case waterData.waterStats === 4:
        return (
          <Icon
            svg={bottle4}
            alt="4 serving of water"
            title="Current: 4 serving of water"
          />
        );
      case waterData.waterStats === 5:
        return (
          <Icon
            svg={bottle5}
            alt="5 serving of water"
            title="Current: 5 serving of water"
          />
        );
      case waterData.waterStats >= 6:
        return (
          <Icon
            svg={bottleEmpty}
            alt="8 serving of water"
            title="Current: Goal Complete!"
          />
        );
      default:
        return (
          <Icon
            svg={bottleFull}
            alt="image for 0 servings of water"
            title="Current: 0 servings of water"
          />
        );
    }
  };
  console.log(`[Before return]:`, waterData.waterStats);

  return (
    <>
      <StyledGauge className="StyledGauge">
        <MobileCardWater className="MobileCardWater">
          {gaugeFill(waterData)}
        </MobileCardWater>
      </StyledGauge>
    </>
  );
};

const StyledGauge = styled.div`
  position: relative;
`;
const MobileCardWater = styled.div`
  position: absolute;
  width: 132px;
  height: 147px;
  left: 0px;
  top: 0px;
`;

export default WaterBottleGauge;
