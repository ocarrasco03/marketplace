import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import AvisoPrivacidad from '../containers/AvisoPrivacidad';
import Terms from '../containers/Terms';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/aviso-de-privacidad' component={AvisoPrivacidad} />
      <Route exact path='/terminos-y-condiciones' component={Terms} />
    </Switch>
  </BrowserRouter>
);

export default App;
