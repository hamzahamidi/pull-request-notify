import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { home, settings } from './reducers';


export const createRootReducer = ( history: History) => combineReducers({
  home,
  router: connectRouter(history),
  settings,
});
