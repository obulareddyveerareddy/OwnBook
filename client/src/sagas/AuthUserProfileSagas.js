import {take, put, call, apply} from 'redux-saga/effects';
import * as authUserProfileApis from './../apis/AuthUserProfileApis';

export function* authUserProfileSaga(){
    try{
        yield take('GET_AUTH_USER_PROFILE');
        let resp = yield call(authUserProfileApis.getApiAuthGoogleProfile);
        let userProfile = yield apply(resp, resp.json);
        yield put({type: 'GET_AUTH_USER_PROFILE_SUCCESS', payload:userProfile});
    }catch(error){
        yield put({type: 'GET_AUTH_USER_PROFILE_FAILURE', error});
    }
}