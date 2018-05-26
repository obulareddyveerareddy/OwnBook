import {take, put, call, apply} from 'redux-saga/effects';
import * as authUserProfileApis from './../apis/AuthUserProfileApis';

export function* authUserProfileSaga(){
    try{
        yield take('GET_AUTH_USER_PROFILE');
        let resp = yield call(authUserProfileApis.getGoogleAuthSessionProfile);
        let userProfile = JSON.parse(resp.data.getGoogleAuthSessionProfile.profile);
        userProfile.accountByGoogleRefId = yield call(authUserProfileApis.findAppUserByGooglerefid, {googlerefid:userProfile.profile.id});
        if(!userProfile.accountByGoogleRefId.data.findAppUserByGooglerefid){
            userProfile.accountByGoogleRefId = yield call(authUserProfileApis.addNewAppUser, {displayName:userProfile.profile.displayName, email:userProfile.profile.email, googleRefId:userProfile.profile.id})
        }
        yield put({type: 'GET_AUTH_USER_PROFILE_SUCCESS', payload:userProfile});
    }catch(error){
        yield put({type: 'GET_AUTH_USER_PROFILE_FAILURE', error});
    }
}