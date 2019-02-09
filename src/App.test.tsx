import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

describe('App container', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
