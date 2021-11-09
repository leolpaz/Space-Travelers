import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// Import from missions reducers.
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  // Missions Reducer
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
