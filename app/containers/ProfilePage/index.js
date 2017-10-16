/*
 * ProfilePage
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import axios from 'axios';

export class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      ninja: {},
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/v1/ninjas/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ ninja: res.data.data });
      });
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Ninja Reference: Bringing analytics to American Ninja Warrior." />
        </Helmet>
        <div>
        </div>
      </article>
    );
  }
}

export default ProfilePage;
