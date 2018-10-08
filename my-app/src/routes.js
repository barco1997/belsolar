import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

/**
 * Import all page components here
 */
//import App from './containers/App/index';
import MainPage from './containers/MainPage/index';
import Contacts from './containers/Contacts/index';
import Products from './containers/Products/index';
import MoreInfoPage from './containers/MoreInfoPage/index';
import CataloguePage from './containers/CataloguePage/index';
// import SomePage from './components/SomePage';
// import SomeOtherPage from './components/SomeOtherPage';
import styled from 'styled-components';
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
        <Route exact path="/products" component={Products} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/products/:id" component={MoreInfoPage} />
        <Route exact path="/catalogue" component={CataloguePage} />
      </Switch>
    </AppWrapper>
  );
}

export default Routes;
