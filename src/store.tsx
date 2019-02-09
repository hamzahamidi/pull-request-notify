
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { createRootReducer } from './reducer';

export const history: History = createBrowserHistory();

const initialState = {};

export const store = createStore(
  createRootReducer(history), // root reducer with router state
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
    ),
  ),
);
