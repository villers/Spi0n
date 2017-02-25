import * as type from '../constants/itemsActionTypes';

const initialNavState = {
  items: [],
  error: {},
  hasErrored: false,
  isLoading: false,
  isRefreshing: false,
};

export default function items(state = initialNavState, action) {
  switch (action.type) {
    case type.ITEMS_HAS_ERRORED:
      return {
        ...state,
        errors: action.payload,
        hasErrored: action.error,
        isLoading: false,
        isRefreshing: false,
      };

    case type.ITEMS_IS_LOADING:
      return {
        ...state,
        errors: {},
        hasErrored: false,
        isLoading: true,
      };

    case type.ITEMS_IS_REFRESHING:
      return {
        ...state,
        error: {},
        hasErrored: false,
        isRefreshing: true,
      };

    case type.ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        error: {},
        isLoading: false,
        isRefreshing: false,
      };

    default:
      return state;
  }
}
