import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import AppContainerWithCardStack from './containers/AppContainerWithCardStack';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class App extends React.Component {
    render() {
        return (
			<Provider store={ store }>
				<AppContainerWithCardStack />
			</Provider>
        )
    }
}
