import axios from 'axios';

const FETCH_DATA = 'space-travelers/missions/FETCH-DATA';

const initialState = []

export const fetchData = () => async(dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions')
  const payload = response.data.map(el => {
    const { mission_id, mission_name, description } = el
    el = {mission_id, mission_name, description}
    return el
  })
  dispatch({
    type: FETCH_DATA,
    payload
  })
  console.log(payload)
}

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload
    default:
      return state;
  }
};

export default missionsReducer