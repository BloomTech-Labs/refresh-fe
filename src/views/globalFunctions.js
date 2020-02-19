import moment from 'moment'

export const missionMasher = (mission_subscriptions, missions_in_progress) => {
  mission_subscriptions.map((mission, i) => {
    Array.isArray(missions_in_progress) &&
      missions_in_progress.forEach(missionInProgress => {
        if (mission.mission_id === missionInProgress.mission_id) {
          mission_subscriptions[i] = missionInProgress;
        }
        mission_subscriptions[i].point_current = mission_subscriptions[i]
          .point_current
          ? mission_subscriptions[i].point_current
          : 0;
      });
  });
  return mission_subscriptions;
};

//Date Functions all utilize Moment.js Library
const t = moment()
export const NOW = t.format()//Current Moment
export const SOD = t.startOf('day').format()//Start of Day
export const EOD = t.endOf('day').format()//End of Day
export const tzQuery = `?start=${SOD}&end=${EOD}`//Query By TZ