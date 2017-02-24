import _ from 'lodash';
import * as type from '../constants/itemsActionTypes';

export function itemsHasErrored() {
  return {
    type: type.ITEMS_HAS_ERRORED,
  };
}

export function itemsIsLoading() {
  return {
    type: type.ITEMS_IS_LOADING,
  };
}

export function itemsIsRefreshing() {
  return {
    type: type.ITEMS_IS_REFRESHING,
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: type.ITEMS_FETCH_DATA_SUCCESS,
    items,
  };
}

export function itemsFetchData(url) {
  return (dispatch, state) => {
    dispatch(itemsIsLoading());

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(items => _.chain(state().itemsState.items.concat(items))
        .sortBy(item => new Date(item))
        .uniqBy('ID')
        .value(),
      )
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored()));
  };
}
