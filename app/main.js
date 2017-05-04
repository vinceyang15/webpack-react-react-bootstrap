import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


require('bootstrap/dist/css/bootstrap.css')

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);
