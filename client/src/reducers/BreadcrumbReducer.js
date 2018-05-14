import * as BreadcrumbActionTypes from './../actions/BreadcrumbActionTypes';

export default function emitBreadcrumbObject(state = [], action){
    switch(action.type){
        case BreadcrumbActionTypes.GET_BREADCRUMB_SUCCESS:
            console.log('~~~~~~~~ >>> GET_BREADCRUMB_SUCCESS >>> ',action.payload);
            //return Object.assign({}, action.payload);
            return [...action.payload];
        case BreadcrumbActionTypes.GET_BREADCRUMB_FAILURE:
            console.log('~~~~~~~~ >>> GET_BREADCRUMB_FAILURE >>> ',action.payload);
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}