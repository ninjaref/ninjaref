import React from 'react';
import styled from 'styled-components';
import { Button, ButtonGroup } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const StyledTable = styled(BootstrapTable) `
  padding-top: 20px;
`;

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: [],
      overall: [],
      men: [],
      women: [],
      cSelected: [],
      rSelected: 1,
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:9000/v1/leaderboard/overall')
      .then((res) => {
        this.setState({ overall: this.fixNames(res.data.data) });
        this.setState({ active: this.state.overall });
      });
  }

  componentDidMount() {
    axios.get('http://localhost:9000/v1/leaderboard/men')
      .then((res) => {
        this.setState({ men: this.fixNames(res.data.data) });
      });

    axios.get('http://localhost:9000/v1/leaderboard/women')
      .then((res) => {
        this.setState({ women: this.fixNames(res.data.data) });
      });
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
    if (rSelected === 1) {
      this.setState({ active: this.state.overall });
    } else if (rSelected === 2) {
      this.setState({ active: this.state.men });
    } else {
      this.setState({ active: this.state.women });
    }
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  /* eslint-disable no-param-reassign */
  fixNames(data) {
    data.forEach((item, index) => {
      data[index].Name = `${item.Ninja.FirstName} ${item.Ninja.LastName}`;
    });
    return data;
  }
  /* eslint-enable no-param-reassign */

  formatter(cell, row) {
    return `<a href="/profile/${row.Ninja.ID}">${cell}</a>`;
  }

  render() {
    return (
      <div>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>
            <FormattedMessage {...messages.overall} />
          </Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>
            <FormattedMessage {...messages.men} />
          </Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>
            <FormattedMessage {...messages.women} />
          </Button>
        </ButtonGroup>
        <StyledTable data={this.state.active} striped hover>
          <TableHeaderColumn isKey dataField="Name" dataFormat={this.formatter}>
            <FormattedMessage {...messages.name} />
          </TableHeaderColumn>
          <TableHeaderColumn dataField="Speed">
            <FormattedMessage {...messages.speed} />
          </TableHeaderColumn>
          <TableHeaderColumn dataField="Consistency">
            <FormattedMessage {...messages.consistency} />
          </TableHeaderColumn>
          <TableHeaderColumn dataField="Success">
            <FormattedMessage {...messages.success} />
          </TableHeaderColumn>
          <TableHeaderColumn dataField="Rating">
            <FormattedMessage {...messages.rating} />
          </TableHeaderColumn>
        </StyledTable>
      </div>
    );
  }
}

export default Leaderboard;
