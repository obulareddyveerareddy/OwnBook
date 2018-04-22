import fetch from 'cross-fetch';

export function getApiAuthGoogleProfile(){
    console.log('~~~~~~~~~~~~~ >>> authUserProfileSaga() >> /api/auth/google/profile');
    return fetch('/api/auth/google/profile');
}