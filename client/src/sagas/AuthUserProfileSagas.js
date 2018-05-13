import {take, put, call, apply} from 'redux-saga/effects';
import * as authUserProfileApis from './../apis/AuthUserProfileApis';

export function* authUserProfileSaga(){
    try{
        yield take('GET_AUTH_USER_PROFILE');
        let resp = yield call(authUserProfileApis.getApiAuthGoogleProfile);
        console.log('~~~~~~~~~~ >>> authUserProfileSaga init <<< ~~~~~~~~~~~~');
        console.log(resp.data.getProfileByAccountId);
        let userProfile = JSON.parse(resp.data.getProfileByAccountId.profile);
        console.log('~~~~~~~~~~ >>> userProfile ',userProfile);
        let accountByGoogleRefId = yield call(authUserProfileApis.findAccountByGoogleRefId, {googlerefid:userProfile.profile.id});
        console.log('~~~~~~~~~~ >>> accountByGoogleRefId 1 ',accountByGoogleRefId);
        if(!accountByGoogleRefId.data.findAccountByGooglerefid){
            console.log('~~~~~~~~~~ >>> accountByGoogleRefId 2 ');
            accountByGoogleRefId = yield call(authUserProfileApis.addNewAccount, {displayName:userProfile.profile.displayName, email:userProfile.profile.email, googleRefId:userProfile.profile.id})
        }
        console.log('~~~~~~~~~~ >>> accountByGoogleRefId 3 ',accountByGoogleRefId);
        yield put({type: 'GET_AUTH_USER_PROFILE_SUCCESS', payload:userProfile});
    }catch(error){
        yield put({type: 'GET_AUTH_USER_PROFILE_FAILURE', error});
    }
}