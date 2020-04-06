import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import SpaceshipPeople from '~/pages/SpaceshipPeople';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/spaceshippeople" component={SpaceshipPeople} />
      </Switch>
    </BrowserRouter>
  );
}
