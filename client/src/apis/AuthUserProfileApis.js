import fetch from 'cross-fetch';
import apolloClientRef  from './../apolloClientInit';
import gql from "graphql-tag";

export function getGoogleAuthSessionProfile(){
    console.log('~~~~~~~~~~~~~ >> getGoogleAuthSessionProfile << ~~~~~~~~~~~~~');
    return apolloClientRef.query({
        query: gql`
        query getGoogleAuthSessionProfile{
            getGoogleAuthSessionProfile{
                profile
            }
        }
        `
    });
}

export function findAppUserByGooglerefid({ googlerefid }){
    console.log('~~~~~~~~~~~~~ >> findAppUserByGooglerefid(.) << ~~~~~~~~~~~~~', googlerefid);
    return apolloClientRef.query({
        query: gql`
            query findAppUserByGooglerefid($googlerefid:String){
                findAppUserByGooglerefid(googlerefid:$googlerefid){
                    id
                    displayName
                    email
                    googleRefId
                }
            }
        `,
        variables: {googlerefid}
    });
}

export function addNewAppUser(account){
    console.log('~~~~~~~~~~~~~ >> addNewAppUser(.) << ~~~~~~~~~~~~~', account);
    return apolloClientRef.mutate({mutation:gql`
        mutation addNewAppUser($displayName:String!, $email:String, $googleRefId:String){
            addNewAppUser(displayName:$displayName, email:$email, googleRefId:$googleRefId){
        		id	
                displayName
                email
                googleRefId
            }
        }
    `, variables: account
        
    });
}