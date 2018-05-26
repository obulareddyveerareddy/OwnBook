import * as AccountsActionTypes from './../actions/AccountsActionTypes';

export default function emitAccountsObject(state = [], action){
    let response;
    switch(action.type){
        case AccountsActionTypes.RESP_SAVE_ACCOUNT_INFO:
            console.log('~~~~~~~~ >>> 1) AccountsReducer RESP_SAVE_ACCOUNT_INFO >>> ',action.payload);
            response = [...action.payload];
            console.log('~~~~~~~~ >>> 2) AccountsReducer RESP_SAVE_ACCOUNT_INFO >>> ',response);
            return response;
        case AccountsActionTypes.RESP_FETCH_ACCOUNT_INFO:
            console.log('~~~~~~~~ >>> 1) AccountsReducer RESP_FETCH_ACCOUNT_INFO >>> ', action.payload);
            return [...action.payload];
        default:
            return state;
    }
}