import 'bootstrap/dist/css/bootstrap.css';
import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { history, store} from './store';

ReactDOM.render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </ConnectedRouter>
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
