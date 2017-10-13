/*
 * LeaderboardPage
 *
 * Show the top-15 competitors by Ninja Rating.
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Leaderboard from 'components/Leaderboard';

export default class LeaderboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <Leaderboard />
      </div>
    );
  }
}
