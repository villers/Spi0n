import { combineReducers } from 'redux';
import navigationState from './navigationState';
import itemsState from './itemsState';

export default combineReducers({
    navigationState,
    itemsState
});
