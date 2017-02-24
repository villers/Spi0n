import * as type from '../constants/itemsActionTypes';

export function itemsHasErrored(bool) {
    return {
        type: type.ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: type.ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items, append) {
    return {
        type: (append) ? type.ITEMS_FETCH_DATA_APPEND_SUCCESS : type.ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export function itemsFetchData(url, append = false) {
    console.log(url);
    return (dispatch) => {

        if (!append) {
            dispatch(itemsIsLoading(true));
        }

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items, append)))
            .catch((error) => dispatch(itemsHasErrored(true)));
    };
}