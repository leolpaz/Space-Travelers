import axios from 'axios';

const FETCH_DATA = 'space-travelers/missions/FETCH-DATA';

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

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
