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

export function addNewAccount(displayName, email, googleRefId){
    console.log('~~~~~~~~~~~~~ >> addNewAccount(.) << ~~~~~~~~~~~~~', displayName);
    const newAccount =  gql`
        mutate addNewAccount{
            addNewAccount(displayName:'deepthi.juni', email:'deepthi.juni@gmail.com', googleRefId:'81238719237898172398'){
                displayName
                email
                googleRefId
            }
        }
    `;
    return apolloClientRef.mutate({newAccount, variables: {displayName, email, googleRefId}});
}