import * as authUserProfileActions from './AuthUserProfileActionTypes';

export function getAuthUserProfile(){
    console.log('~~~~~~~~ >>> authUserProfileAction.getAuthUserProfile() <<< ~~~~~~~~');
    return { type: authUserProfileActions.GET_AUTH_USER_PROFILE};
}