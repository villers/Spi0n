import * as type from '../constants/itemsActionTypes';

const initialNavState = {
    items: [],
    hasErrored: false,
    isLoading: false
};

export default function items(state = initialNavState, action) {
    switch (action.type) {
        case type.ITEMS_HAS_ERRORED:
            return Object.assign({}, state, {
                hasErrored: action.hasErrored
            });

        case type.ITEMS_IS_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });

        case type.ITEMS_FETCH_DATA_SUCCESS:
            console.log("fetch update");
            return Object.assign({}, state, {
                items: action.items
            });

        case type.ITEMS_FETCH_DATA_APPEND_SUCCESS:
            console.log("fetch append", state, action);
            //return state.concat(action.items);
            return Object.assign({}, state, {
                items: state.items.concat(action.items),
            });

        default:
            return state;
    }
}