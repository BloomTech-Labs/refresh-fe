import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import axios from "axios";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
// Atoms
import Icon from "../../atoms/icon/icon";
// SVG Images

// Pulls in images
import mental0 from "../../../images/gauge/breakGauge/break0.svg";
import mental15 from "../../../images/gauge/breakGauge/break0.svg";
import mental30 from "../../../images/gauge/breakGauge/break0.svg";
import mental45 from "../../../images/gauge/breakGauge/break0.svg";
import mentalComplete from "../../../images/gauge/breakGauge/break0.svg";

const MentalGauge = ({ children, ...props }) => {
  const [gaugeData, setGaugeData] = useState({
    mentalStats: 0
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
              mission.vertical.toLowerCase() === "mental"
                ? setGaugeData({
                    mentalStats: mission.point_current
                  })
                : console.log(`[No mental data || end of map]`);
            });
      });
  }, []);

  console.log(`[gaugeData after useEffect]`, gaugeData);
  // console.log(`[mentalStats after useEffect]`, mentalStats);

  const gaugeFill = () => {
    console.log(`[gaugeData inside gaugeFill]`, gaugeData);
    switch (true) {
      case gaugeData.mentalStats === 1:
        return (
          <Icon
            svg={mental15}
            alt="1 mental break"
            title="Current: 1 mental break"
          />
        );
      case gaugeData.mentalStats === 2:
        return (
          <Icon
            svg={mental30}
            alt="2 mental break"
            title="Current: 2 mental break"
          />
        );
      case gaugeData.mentalStats === 3:
        return (
          <Icon
            svg={mental45}
            alt="3 mental break"
            title="Current: 3 mental break"
          />
        );
      case gaugeData.mentalStats === 4:
        return (
          <Icon
            svg={mentalComplete}
            alt="Mental break goal complete!"
            title="Mental break goal complete"
          />
        );
      default:
        return (
          <Icon
            svg={mental0}
            alt="0 minutes of social activity"
            title="Current: 0 minutes of social activity"
          />
        );
    }
  };
  console.log(`[Before return]:`, gaugeData.mentalStats);

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

export default MentalGauge;
