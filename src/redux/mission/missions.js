import axios from 'axios';

const FETCH_DATA = 'space-travelers/missions/FETCH-DATA';
const JOIN_MISSION = 'space-travelers/missions/JOIN-MISSION';
const LEAVE_MISSION = 'space-travelers/missions/LEAVE-MISSION';

const initialState = [];

export const fetchData = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const payload = response.data.map((el) => {
    const missionId = el.mission_id;
    const missionName = el.mission_name;
    const { description } = el;
    const newEl = { missionId, missionName, description };
    return newEl;
  });
  dispatch({
    type: FETCH_DATA,
    payload,
  });
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.missionId === action.id) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.missionId === action.id) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionsReducer;
