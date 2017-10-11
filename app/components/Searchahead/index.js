import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';

class Searchahead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/v1/ninjas`)
      .then(res => {
        this.setState({ suggestions: res.data.data });
      });
  }

  render() {
    return (
      <Typeahead
        labelKey={option => `${option.FirstName} ${option.LastName}`}
        options={this.state.suggestions}
        placeholder="Enter a name ..."
      />
    );
  }
}

export default Searchahead;
