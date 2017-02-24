import * as type from '../constants/itemsActionTypes';

const initialNavState = [
    items = [],
    page = 1,
];

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case type.ITEMS_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case type.ITEMS_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = initialNavState, action) {
    switch (action.type) {
        case type.ITEMS_FETCH_DATA_SUCCESS:
            console.log("fetch update");
            return action.items;

        case type.ITEMS_FETCH_DATA_APPEND_SUCCESS:
            console.log("fetch append", state, action.items);
            return state.concat(action.items);
            //return [].concat(state).concat(action.items);

        default:
            return state;
    }
}