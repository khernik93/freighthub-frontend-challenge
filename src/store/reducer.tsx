/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router/immutable';

import history from '../utils/history';
import homeReducer from '../components/Home/store/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    home: homeReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
