
export const missionMasher = (mission_subscriptions, missions_in_progress) => {
  mission_subscriptions.map((mission, i) => {
    missions_in_progress.forEach(missionInProgress => {
      if (mission.mission_id === missionInProgress.mission_id) {
        mission_subscriptions[i] = missionInProgress;
      }
    });
  });
  return mission_subscriptions
};
