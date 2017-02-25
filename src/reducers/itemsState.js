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
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        hasErrored: action.error,
      };

    case type.ITEMS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        hasErrored: false,
      };

    case type.ITEMS_IS_REFRESHING:
      return {
        ...state,
        isRefreshing: true,
        hasErrored: false,
      };

    case type.ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        isRefreshing: false,
      };

    default:
      return state;
  }
}
