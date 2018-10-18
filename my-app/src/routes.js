import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

/**
 * Import all page components here
 */
//import App from './containers/App/index';
import MainPage from './containers/MainPage/index';
import ContactsPage from './containers/ContactsPage/index';
import ProductsPage from './containers/ProductsPage/index';
import ParticularProductPage from './containers/ParticularProductPage/index';

import CollaborationPage from './containers/CollaborationPage/index';
// import SomePage from './components/SomePage';
// import SomeOtherPage from './components/SomeOtherPage';
import styled from 'styled-components';
import { AboutUsPage } from './containers/AboutUsPage';
import { ServicesPage } from './containers/ServicesPage';
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 *
 */
const AppWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export function Routes() {
  return (
    <AppWrapper>
      <Switch>
        <Redirect from="/" exact to="/main" />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/products/:id" component={ParticularProductPage} />
        <Route exact path="/collaboration" component={CollaborationPage} />
        <Route exact path="/aboutus" component={AboutUsPage} />
        <Route exact path="/services" component={ServicesPage} />
      </Switch>
    </AppWrapper>
  );
}

export default Routes;
