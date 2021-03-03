import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Checkout from './checkout/Checkout';

export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  );
}