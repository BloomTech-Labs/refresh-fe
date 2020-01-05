import React, { useContext } from "react";
import styled from "styled-components";
// contexts
import { UserMissionsContext } from "../../../contexts/UserMissionsContext";
// components
import WaterCard from "../profileViews/WaterCard";
import ProfileCompletion from "../profileViews/ProfileCompletion";
import WeeklySurvey from "../profileViews/WeeklySurvey";
import YourReminders from "../profileViews/YourReminders";
import ProfileBadges from "../profileViews/ProfileBadges";
import ProfileHeader from "../profileViews/ProfileHeader";
import waves from "../../../images/Onboarding/waves.svg";

/* All sizing for profile view & profile edit is for mobile only */

const PVWrapper = styled.div`
  width: 37.5rem;
  height: 81.2rem;
  position: absolute;
  z-index: -3;
  background-color: #4742bc;
  background-image: url(${waves});
`;

const ProfileLineBreak = styled.div`
  position: absolute;
  width: 37.4rem;
  height: 0;
  left: 0;
  top: 21rem;
  border: 0.3rem solid rgba(71, 69, 161, 0.85);
`;

const ProfileOverview = props => {
  // contexts
  const userMissions = useContext(UserMissionsContext);
  const { missions } = userMissions;
  return (
    <>
      <PVWrapper>
        <ProfileHeader />
        <ProfileLineBreak />

        {missions.map(mission => {
          return (
            <WaterCard key={mission.mission_id} mission={mission} {...props} />
          );
        })}

        <ProfileCompletion />
        <WeeklySurvey />
        <YourReminders />
        <ProfileBadges />
      </PVWrapper>
    </>
  );
};

export default ProfileOverview;
