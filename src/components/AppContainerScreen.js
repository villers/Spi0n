import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Home from '../containers/Home';
import Detail from '../containers/Detail';

const AppContainer = () => (
  <Router hideNavBar>
    <Scene key="root">
      <Scene key="home" component={Home} title="SpiOn" initial />
      <Scene key="detail" component={Detail} title="Detail" />
    </Scene>
  </Router>
);

export default AppContainer;
