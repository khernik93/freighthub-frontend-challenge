import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderComponent from '../Header';
import HomeComponent from '../Home';
import DetailsComponent from '../Details';
import NotFoundPageComponent from '../NotFoundPage';

const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/details/:id" component={DetailsComponent} />
        <Route path="" component={NotFoundPageComponent} />
      </Switch>
    </>
  );
};

export default AppComponent;
