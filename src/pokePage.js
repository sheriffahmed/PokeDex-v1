import React from 'react';
import {Link, Switch, Route} from 'react=router-dom';


const Pokemon = () => {
  <div>
    <Link to='/pokemon/name'>Name</Link>
    <Link to='/pokemon/number'>Number</Link>
    <Switch>
    <Route to='/pokemon/name' />
    <Route to='/pokemon/number' />
    </Switch>
  </div>
}