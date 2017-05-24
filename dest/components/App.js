import React from 'react';
import { Grid } from 'react-bootstrap';
import BaseTable from '../BaseTable.jsx';

require('./App.css');


export default () => (
  <Grid fluid>
  
  <BaseTable />
  </Grid>
);

/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
*/
