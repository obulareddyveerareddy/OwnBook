import {take, put, call, apply} from 'redux-saga/effects';

export function* accountsBreadcrumbSaga(){
    try{
        yield take('GET_ACCOUNTS_BREADCRUMB');
        console.log('~~~~~~~~~~~>>> accountsBreadcrumbSaga -- 2');
        let breadCrumb = [];
        breadCrumb.push({displayName:'Home', iconClassName:'home', linkPath:'/'});
        breadCrumb.push({displayName:'Accounts', iconClassName:'account_box', linkPath:'/ownaccount/home/accounts'});
        console.log('~~~~~~~~~~~>>> accountsBreadcrumbSaga -- 3 --- ',breadCrumb);
        yield put({type: 'GET_BREADCRUMB_SUCCESS', payload:breadCrumb});
    }catch(error){
        yield put({type: 'GET_BREADCRUMB_FAILURE', error});
    }
}

export function* budgetBreadcrumbSaga(){
    try{
        yield take('GET_BUDGET_BREADCRUMB');
        console.log('~~~~~~~~~~~>>> accountsBreadcrumbSaga -- 2');
        let breadCrumb = [];
        breadCrumb.push({displayName:'Home', iconClassName:'home', linkPath:'/'});
        breadCrumb.push({displayName:'Budget', iconClassName:'account_box', linkPath:'/ownaccount/home/budget'});
        console.log('~~~~~~~~~~~>>> accountsBreadcrumbSaga -- 3 --- ',breadCrumb);
        yield put({type: 'GET_BREADCRUMB_SUCCESS', payload:breadCrumb});
    }catch(error){
        yield put({type: 'GET_BREADCRUMB_FAILURE', error});
    }
}