import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './Home';
import Ranking from '../pages/Ranking';
import AboutItem from '../pages/AboutItem';
import Contacts from '../pages/Contacts';

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/pages/Contacts' component={Contacts} />
      <Route exact path='/pages/Ranking' component={Ranking} />
      <Route exact path='/pages/AboutItem' component={AboutItem} />
    </Switch>
  )
}
