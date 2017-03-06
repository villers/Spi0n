import * as type from '../constants/itemsActionTypes';

const initialNavState = {
  items: [],
  item: {},
  error: {},
  hasErrored: false,
  isLoading: false,
};

export default function items(state = initialNavState, action) {
  switch (action.type) {
    case type.ITEMS_HAS_ERRORED:
      return {
        ...state,
        errors: action.payload,
        hasErrored: action.error,
        isLoading: false,
      };

    case type.ITEMS_IS_LOADING:
      return {
        ...state,
        errors: {},
        hasErrored: false,
        isLoading: true,
      };

    case type.ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        error: {},
        isLoading: false,
      };

    case type.ITEM_FETCH_DATA_SUCCESS:
      console.log(action);
      return {
        ...state,
        item: action.payload.item,
        error: {},
        isLoading: false,
      };

    default:
      return state;
  }
}
