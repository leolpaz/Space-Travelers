import axios from 'axios';

const FETCH_ROCKETS_DATA = 'space-travelers/rockets/FETCH-DATA';
const END_POINT_URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

export const fetchRockets = () => async (dispatch) => {
  const response = await axios.get(END_POINT_URL);
  const payload = response.data.map((data) => {
    const { id } = data;
    const rocketName = data.rocket_name;
    const { description } = data;
    const flickrImages = data.flickr_images;
    const updatedData = {
      id,
      rocketName,
      description,
      flickrImages,
    };
    return updatedData;
  });
  dispatch({
    type: FETCH_ROCKETS_DATA,
    payload,
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
