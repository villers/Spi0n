import React from 'react';
import { Navigator } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import First from '../containers/First';
import Second from '../containers/Second';

const AppContainer = () => (
  <Router sceneStyle={{ paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight }}>
    <Scene key="root">
      <Scene key="first" component={First} title="First" initial />
      <Scene key="second" component={Second} title="Second" />
    </Scene>
  </Router>
);

export default AppContainer;
