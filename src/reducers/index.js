import { combineReducers } from 'redux';
import navigationState from './navigationState';
import {itemsHasErrored, items, itemsIsLoading} from './itemsState';

export default combineReducers({
    navigationState,
    itemsHasErrored,
    items,
    itemsIsLoading
});
