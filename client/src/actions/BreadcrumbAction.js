import * as BreadcrumbActionTypes from './BreadcrumbActionTypes';

export function fetchAccountsStateBreadcrumbDetails(){
    console.log('~~~~~~~~~~~>>> fetchAccountsStateBreadcrumbDetails -- 1');
    return { type: BreadcrumbActionTypes.GET_ACCOUNTS_BREADCRUMB};
}

export function fetchBudgetStateBreadcrumbDetails(){
    console.log('~~~~~~~~~~~>>> fetchBudgetStateBreadcrumbDetails -- 1');
    return { type: BreadcrumbActionTypes.GET_BUDGET_BREADCRUMB};
}