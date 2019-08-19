/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';

import createReducer from './reducer';
import effects from './effects';
import { createEpicMiddleware } from 'redux-observable';
import BackendClient from '../clients/backend/backend.client';

export default function configureStore(initialState = {}, history) {

  const epicMiddleware = createEpicMiddleware({
    dependencies: { backendClient: new BackendClient() }
  });
  const middlewares = [epicMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store: any = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  epicMiddleware.run(effects);

  // Extensions
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
