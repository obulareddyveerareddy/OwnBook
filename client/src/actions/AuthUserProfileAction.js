import * as authUserProfileActions from './AuthUserProfileActionTypes';

export function getAuthUserProfile(){
    return { type: authUserProfileActions.GET_AUTH_USER_PROFILE};
}