import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Ranking from '../pages/Ranking';
import AboutItem from '../pages/AboutItem';
import Contacts from '../pages/Contacts';
import { RouterUrl } from '../routes.js';

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path={RouterUrl.Homepage} component={Home} />
      <Route exact path={RouterUrl.Contacts} component={Contacts} />
      <Route exact path={RouterUrl.Ranking} component={Ranking} />
      <Route exact path={RouterUrl.AboutItem} render={(props) => <AboutItem {...props} id={props.id}/>} />
      <Route path={RouterUrl.NotFound} component={<h2>Страница не найдена</h2>} />
    </Switch>
  )
}
