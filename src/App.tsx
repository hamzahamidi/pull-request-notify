import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header, Home, Login, Settings } from './components';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </div>
    );
  }
}

export default App;
