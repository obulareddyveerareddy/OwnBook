import fetch from 'cross-fetch';

export function getApiAuthGoogleProfile(){
    return fetch('/api/auth/google/profile');
}