import {take, put, call, apply} from 'redux-saga/effects';
import * as authUserProfileApis from './../apis/AuthUserProfileApis';

export function* authUserProfileSaga(){
    try{
        yield take('GET_AUTH_USER_PROFILE');
        let resp = yield call(authUserProfileApis.getGoogleAuthSessionProfile);
        console.log('~~~~~~~~~~~~~~~~~ getGoogleAuthSessionProfile 1--->> ', resp);
        let userProfile = JSON.parse(resp.data.getGoogleAuthSessionProfile.profile);
        console.log('~~~~~~~~~~~~~~~~~ getGoogleAuthSessionProfile 2--->> ', userProfile);
        userProfile.accountByGoogleRefId = yield call(authUserProfileApis.findAppUserByGooglerefid, {googlerefid:userProfile.profile.id});
        console.log('~~~~~~~~~~~~~~~~~ findAppUserByGooglerefid 3--->> ', userProfile.accountByGoogleRefId);
        if(!userProfile.accountByGoogleRefId.data.findAppUserByGooglerefid){
            console.log('~~~~~~~~~~~~~~~~~ addNewAppUser 4--->> ');
            userProfile.accountByGoogleRefId = yield call(authUserProfileApis.addNewAppUser, {displayName:userProfile.profile.displayName, email:userProfile.profile.email, googleRefId:userProfile.profile.id})
            console.log('~~~~~~~~~~~~~~~~~ addNewAppUser 5--->> ', userProfile.accountByGoogleRefId);
        }
        yield put({type: 'GET_AUTH_USER_PROFILE_SUCCESS', payload:userProfile});
    }catch(error){
        yield put({type: 'GET_AUTH_USER_PROFILE_FAILURE', error});
    }
}