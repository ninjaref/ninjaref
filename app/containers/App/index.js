/**
 * This component is the skeleton around the actual pages and should only
 * contain elements that should be seen on all pages.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div>
      <Header />
      <Container>
        <Helmet
          titleTemplate="ninjaref - %s"
          defaultTitle="ninjaref"
        >
          <meta name="description" content="Ninja Reference: Bringing analytics to American Ninja Warrior." />
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Container>
    </div>
  );
}
