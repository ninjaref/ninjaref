import React from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import { withRouter } from 'react-router';
import Select from 'react-select';
import axios from 'axios';

class Searchahead extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:9000/v1/ninjas')
      .then((res) => {
        this.setState({ suggestions: this.fixNames(res.data.data) });
      });
  }

  handleChange(val) {
    this.props.history.push(`/profile/${val.ID}`);
  }

  /* eslint-disable no-param-reassign */
  fixNames(data) {
    data.forEach((item, index) => {
      data[index].Name = `${item.FirstName} ${item.LastName}`;
    });
    return data;
  }
  /* eslint-enable no-param-reassign */

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="query">Get started by entering a competitor&#39;s name:</Label>
          <Select
            name="form-field-name"
            valueKey="Name"
            labelKey="Name"
            options={this.state.suggestions}
            onChange={this.handleChange}
          />
        </FormGroup>
      </Form>
    );
  }
}

export default withRouter(Searchahead);
