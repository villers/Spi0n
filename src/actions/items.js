import _ from 'lodash';
import * as type from '../constants/itemsActionTypes';

export const itemsHasErrored = error => ({
  type: type.ITEMS_HAS_ERRORED,
  payload: error,
  error: true,
});

export const itemsIsLoading = () => ({
  type: type.ITEMS_IS_LOADING,
});

export const itemsFetchDataSuccess = items => ({
  type: type.ITEMS_FETCH_DATA_SUCCESS,
  payload: { items },
});

export const itemFetchDataSuccess = item => ({
  type: type.ITEM_FETCH_DATA_SUCCESS,
  payload: { item },
});

export function itemsFetchData(url) {
  console.log(url);
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
        .sortBy(item => -new Date(item.post_date_gmt))
        .uniqBy('ID')
        .value(),
      )
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(error => dispatch(itemsHasErrored(error)));
  };
}

export function itemFetchData(url) {
  console.log(url);
  return (dispatch) => {
    dispatch(itemsIsLoading());

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(itemFetchDataSuccess(items)))
      .catch(error => dispatch(itemsHasErrored(error)));
  };
}
