import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StartScreen from './Components/StartScreen/index';
import MegaSena from './Components/Megasena/index';
import DuplaSena from "./Components/Duplasena/index";

function Routes() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={StartScreen}/>
            <Route path="/mega" component={MegaSena}/>
            <Route path="/dupla" component={DuplaSena}/>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Routes;