import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import * as reducers from './reducers';

// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const combinedReducers = combineReducers({
  homeData: reducers.HomeReducers,
});

function promiseMiddleware() {
  return next => action => {
    const { promise, types, payload } = action;

    if (!promise) return next(action);

    const [REQUEST, SUCCESS, ERROR] = types;

    if (REQUEST) next({ type: REQUEST, payload });

    return promise.then(
      response => next({
        type: SUCCESS,
        payload: { ...payload, data: response.data || response },
      }),
      error => next({ type: ERROR, error, payload })
    );
  };
}

const store = applyMiddleware(promiseMiddleware)(createStore)(combinedReducers);

const ReactApp = () => (
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
);

render(<ReactApp />, document.getElementById('reactApp'));
