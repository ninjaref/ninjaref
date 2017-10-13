import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios';

class Leaderboard extends React.Component {
  constructor() {
    super();

    this.state = {
      overall: [],
      men: [],
      women: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:9000/v1/leaderboard/overall')
      .then((res) => {
        this.setState({ overall: this.fixNames(res.data.data) });
      });
  }

  /* eslint-disable no-param-reassign */
  fixNames(data) {
    data.forEach((item, index) => {
      data[index].Name = `${item.Ninja.FirstName} ${item.Ninja.LastName}`;
    });
    return data;
  }
  /* eslint-enable no-param-reassign */

  render() {
    return (
      <BootstrapTable data={this.state.overall} striped hover>
        <TableHeaderColumn isKey dataField="Name">Name</TableHeaderColumn>
        <TableHeaderColumn dataField="Speed">Speed</TableHeaderColumn>
        <TableHeaderColumn dataField="Consistency">Consistency</TableHeaderColumn>
        <TableHeaderColumn dataField="Success">Success</TableHeaderColumn>
        <TableHeaderColumn dataField="Rating">Ninja Rating</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Leaderboard;
