import {take, put, call, apply} from 'redux-saga/effects';
import * as accountsApis from './../apis/AccountsApis';

export function* saveAccountInfo(){
    try{
        const { account } = yield take('REQ_SAVE_ACCOUNT_INFO');
        console.log('3) MetadataSaga <::> saveAccountInfo ~~~ ', account);
        /** */
        let response =  yield call(accountsApis.saveAccountInfo, account);
        
        console.log('4) MetadataSaga <::> REQ_CODEVALUES_BYCODEIds ~~~ ', response);
        yield put({type: 'RESP_SAVE_ACCOUNT_INFO', payload:response});
    }catch(error){
        yield put({type: 'ERROR_SAVE_ACCOUNT_INFO', error});
    }
}

export function* getAllAccountsByAppUserIdSaga(){
    try{
        yield take('REQ_FETCH_ACCOUNT_INFO');
        console.log('3) MetadataSaga <::> getAllAccountsByAppUserIdSaga ~~~ ');
        let response =  yield call(accountsApis.getAllAccountsByAppUserIdApi);
        console.log('4) MetadataSaga <::> REQ_CODEVALUES_BYCODEIds ~~~ ');
        yield put({type: 'RESP_FETCH_ACCOUNT_INFO', payload:response.data.getAllAccountsByAppUserId});
    }catch(error){
        yield put({type: 'ERROR_FETCH_ACCOUNT_INFO', error});
    }
}