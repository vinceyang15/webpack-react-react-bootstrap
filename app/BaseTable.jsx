import React from 'react';
import { Table } from 'react-bootstrap';

class BaseTable extends React.Component {

  render() {
    return (
      <Table bordered striped>
        <thead>
          <tr>
            <td>
              col 1
            </td>
          </tr>
        </thead>
      </Table>
    );
  }
};

export default BaseTable;
