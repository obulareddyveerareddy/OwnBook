import * as AccountsActionTypes from './AccountsActionTypes';

export function saveAccountInfo(account){
    console.log('2) AccountsAction <::> saveAccountInfo ~~~ ', account);
    return { type: AccountsActionTypes.REQ_SAVE_ACCOUNT_INFO, account};
}

export function getAllAccountsByAppUserId(){
    console.log('2) AccountsAction <::> getAllAccountsByAppUserId ~~~ ');
    return { type: AccountsActionTypes.REQ_FETCH_ACCOUNT_INFO};
}


export function removeAccountAction(accountId){
    console.log('2) AccountsAction <::> removeAccountAction ~~~ ',accountId);
    return { type: AccountsActionTypes.REQ_REMOVE_ACCOUNT_INFO, accountId};
}