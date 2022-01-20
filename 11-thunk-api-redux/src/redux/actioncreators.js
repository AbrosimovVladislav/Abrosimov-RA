import {customHistory} from "./../index";

export const fetchServicesThunked = () => (dispatch, getState) => {
    const url = getState().serviceListReducer.getAllUrl;
    dispatch({type: "SET_LOADING_LIST_STATUS", payload: "pending"});
    fetch(url)
        .then(r => r.json())
        .then(json => dispatch({type: "PUT_SERVICES", payload: json}))
        .then(() => dispatch({type: "SET_LOADING_LIST_STATUS", payload: "idle"}))
        .catch((error) => {
            dispatch({type: "SET_LOADING_LIST_STATUS", payload: "error"})
        });
}

export const deleteServiceThunked = (id) => (dispatch, getState) => {
    const url = getState().serviceListReducer.deleteServiceUrl + id
    dispatch({type: "SET_LOADING_LIST_STATUS", payload: "pending"});
    fetch(url, {method: 'DELETE'})
        .then(() => dispatch({type: "SET_LOADING_LIST_STATUS", payload: "idle"}))
        .then(() => dispatch(fetchServicesThunked()))
        .catch((error) => {
            dispatch({type: "SET_LOADING_LIST_STATUS", payload: "error"})
        })
}

export const fetchItemByIdThunked = (id) => (dispatch, getState) => {
    const url = getState().serviceItemReducer.getItemByIdUrl + id
    dispatch({type: "SET_LOADING_ITEM_STATUS", payload: "pending"});
    fetch(url)
        .then(r => r.json())
        .then(json => dispatch({type:"PUT_ITEM", payload:json}))
        .then(() => dispatch({type: "SET_LOADING_ITEM_STATUS", payload: "idle"}))
        .catch((error) => {
            dispatch({type: "SET_LOADING_ITEM_STATUS", payload: "error"})
        });
}

export const saveItemThunked = (item) => (dispatch, getState) => {
    const url = getState().serviceItemReducer.saveItemUrl
    dispatch({type: "SET_LOADING_ITEM_STATUS", payload: "pending"});
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => dispatch({type: "SET_LOADING_ITEM_STATUS", payload: "redirect"}))
        .catch((error) => {
            dispatch({type: "SET_LOADING_ITEM_STATUS", payload: "error"})
        })
}