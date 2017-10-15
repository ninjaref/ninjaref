/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H2 from 'components/H2';
import Searchahead from 'components/Searchahead';
import messages from './messages';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Ninja Reference: Bringing analytics to American Ninja Warrior." />
        </Helmet>
        <div>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
          <Searchahead />
        </div>
      </article>
    );
  }
}

export default HomePage;
