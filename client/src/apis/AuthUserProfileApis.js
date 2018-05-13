import fetch from 'cross-fetch';
import apolloClientRef  from './../apolloClientInit';
import gql from "graphql-tag";

export function getApiAuthGoogleProfile(){
    console.log('~~~~~~~~~~~~~ >> getApiAuthGoogleProfile << ~~~~~~~~~~~~~');
    return apolloClientRef.query({
        query: gql`
        query getApiAuthGoogleProfile{
                getProfileByAccountId{
                profile
            }
        }
        `
    });
}

export function findAccountByGoogleRefId({ googlerefid }){
    console.log('~~~~~~~~~~~~~ >> findAccountByGoogleRefId(.) << ~~~~~~~~~~~~~', googlerefid);
    return apolloClientRef.query({
        query: gql`
            query findAccountByGoogleRefId($googlerefid:String){
                findAccountByGooglerefid(googlerefid:$googlerefid){
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

export function addNewAccount(account){
    console.log('~~~~~~~~~~~~~ >> addNewAccount(.) << ~~~~~~~~~~~~~', account);
    return apolloClientRef.mutate({mutation:gql`
        mutation addNewAccount($displayName:String!, $email:String, $googleRefId:String){
            addNewAccount(displayName:$displayName, email:$email, googleRefId:$googleRefId){
        		id	
                displayName
                email
                googleRefId
            }
        }
    `, variables: account
        
    });
}