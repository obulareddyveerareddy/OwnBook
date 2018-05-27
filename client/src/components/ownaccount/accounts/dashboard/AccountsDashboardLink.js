import { connect }            from 'react-redux';

import AccountsDashboardPage  from './AccountsDashboardPage';
import * as AccountsAction    from './../../../../actions/AccountsAction';
import * as breadcrumbAction  from './../../../../actions/BreadcrumbAction';

const mapStateToProps = (state, ownProps) => {
  console.log('~~~~~~~>>> AccountsLink.js >>> ', state.breadcrumb);
  return {
    breadcrumb:state.breadcrumb,
    accounts:state.accounts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllAccountsByAppUserId:()=>{
      console.log('0) AddAccountsLink <::> getAllAccountsByAppUserId ~~~ ');
      dispatch(AccountsAction.getAllAccountsByAppUserId());
    },
    fetchAccountsStateBreadcrumbDetails:()=>{
      console.log('~~~~~~~~~~~~~~ >>> mapDispatchToProps(..) @ fetchAccountsStateBreadcrumbDetails <<< ~~~~~~~~~~~~~~');
      dispatch(breadcrumbAction.fetchAccountsStateBreadcrumbDetails());
    },
    removeAccount:(accountId)=>{
      console.log('~~~~~~~~~~~~~~ >>> mapDispatchToProps(..) @ removeAccount <<< ~~~~~~~~~~~~~~',accountId);
      dispatch(AccountsAction.removeAccountAction(accountId));
    }
  }
}

const AccountsDashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsDashboardPage)

export default AccountsDashboardLink