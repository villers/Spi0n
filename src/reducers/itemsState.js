import * as type from '../constants/itemsActionTypes';

const initialNavState = {
  items: [],
  hasErrored: false,
  isLoading: false,
  isRefreshing: false,
};

export default function items(state = initialNavState, action) {
  switch (action.type) {
    case type.ITEMS_HAS_ERRORED:
      return Object.assign({}, state, {
        isLoading: false,
        isRefreshing: false,
        hasErrored: true,
      });

    case type.ITEMS_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        hasErrored: false,
      });

    case type.ITEMS_IS_REFRESHING:
      return Object.assign({}, state, {
        isRefreshing: true,
        hasErrored: false,
      });

    case type.ITEMS_FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        items: action.items,
        isLoading: false,
        isRefreshing: false,
      });

    default:
      return state;
  }
}
