import fetch from 'cross-fetch';
import apolloClientRef  from './../apolloClientInit';
import gql from "graphql-tag";

export async function saveAccountInfo(account){
    console.log('4) AccountsApis <::> REQ_SAVE_ACCOUNT_INFO ~~~ ', account);
    let response = await apolloClientRef.mutation({
        mutation: gql`
        mutation addAccount(bankName:String
                            ,accountHolderName:String
                            ,accountNumber:String
                            ,accountAliasName:String
                            ,accountType:String
                            ,cardDetails:[CardDetailsInput]){
                addAccount(
                             bankName:$bankName
                            ,accountHolderName:$accountHolderName
                            ,accountNumber:$accountNumber
                            ,aliasName:$accountAliasName
                            ,accountType:$accountType
                            ,cardDetails:$cardDetails
                            ){
                id
            }
        }
        `,
        variables: {account}
    });
    
    return response;
}

export async function getAllAccountsByAppUserIdApi(){
    let response = await apolloClientRef.query({
        query: gql`
            {
              getAllAccountsByAppUserId(id:2){
                id
                bankName
                accountHolderName
                accountNumber
                accountType
                aliasName
              }
            }
        `
    });
    return response;
    
}

export async function removeAccountApi(accountId){
    console.log('4) AccountsApis <::> removeAccountApi ~~~ ', accountId);
    
    return apolloClientRef.mutation({
        mutation: gql`
        mutation removeAccount(accountId:Int){
            removeAccount(accountId:$accountId){
                id
            }
        }
        `,
        variables: {accountId}
    });
}