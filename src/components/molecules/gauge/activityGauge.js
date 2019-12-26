import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import axios from "axios";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
// Atoms
import Icon from "../../atoms/icon/icon";
// SVG Images

// Pulls in images
import activity0 from "../../../images/gauge/activityGauge/activity0.svg";
import activity5 from "../../../images/gauge/activityGauge/activity5.svg";
import activity10 from "../../../images/gauge/activityGauge/activity10.svg";
import activity15 from "../../../images/gauge/activityGauge/activity15.svg";
import activity20 from "../../../images/gauge/activityGauge/activity20.svg";
import activity25 from "../../../images/gauge/activityGauge/activity25.svg";
import activityComplete from "../../../images/gauge/activityGauge/activityComplete.svg";

const ActivityGauge = ({ children, ...props }) => {
  const [gaugeData, setGaugeData] = useState({
    activityStats: 0
  });
  console.log(`[gaugeData before useEffect]`, gaugeData);

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
              mission.vertical.toLowerCase() === "activity"
                ? setGaugeData({
                    activityStats: mission.point_current
                  })
                : console.log(`[end of activity stats]`);
            });
      });
  }, []);

  console.log(`[gaugeData after useEffect]`, gaugeData);
  // console.log(`[waterStats after useEffect]`, activityStats);

  const gaugeFill = () => {
    console.log(`[gaugeData inside gaugeFill]`, gaugeData);
    switch (true) {
      case gaugeData.activityStats === 1:
        return (
          <Icon
            svg={activity5}
            alt="5 minutes of activity"
            title="Current: 5 minutes of activity"
          />
        );
      case gaugeData.activityStats === 2:
        return (
          <Icon
            svg={activity10}
            alt="10 minutes of activity"
            title="Current: 10 minutes of activity"
          />
        );
      case gaugeData.activityStats === 3:
        return (
          <Icon
            svg={activity15}
            alt="15 minutes of activity"
            title="Current: 15 minutes of activity"
          />
        );
      case gaugeData.activityStats === 4:
        return (
          <Icon
            svg={activity20}
            alt="20 minutes of activity"
            title="Current: 20 minutes of activity"
          />
        );
      case gaugeData.activityStats === 5:
        return (
          <Icon
            svg={activity25}
            alt="25 minutes of activity"
            title="Current: 25 minutes of activity"
          />
        );
      case gaugeData.activityStats >= 30:
        return (
          <Icon
            svg={activityComplete}
            alt="30+ minutes of activity"
            title="Current: Goal Complete!"
          />
        );
      default:
        return (
          <Icon
            svg={activity0}
            alt="image for 0 minutes of activity"
            title="Current: 0 minutes of activity"
          />
        );
    }
  };
  console.log(`[Before return]:`, gaugeData.activityStats);

  return (
    <>
      <StyledGauge className="StyledGauge">
        <MobileCardWater className="MobileCardWater">
          {gaugeFill(gaugeData)}
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

export default ActivityGauge;
