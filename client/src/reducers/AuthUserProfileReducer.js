import * as authUserProfileActions from './../actions/AuthUserProfileActionTypes';

export default function authUserProfile(state = {}, action){
    switch(action.type){
        case authUserProfileActions.GET_AUTH_USER_PROFILE_SUCCESS:
            console.log('~~~~~~~~ >>> GET_AUTH_USER_PROFILE_SUCCESS >>> ',action.payload);
            return Object.assign({}, action.payload);
        case authUserProfileActions.GET_AUTH_USER_PROFILE_FAILURE:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}