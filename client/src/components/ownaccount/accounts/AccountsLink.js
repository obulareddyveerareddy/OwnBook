import { connect }            from 'react-redux';

import AccountsPage           from './AccountsPage';
import * as breadcrumbAction  from './../../../actions/BreadcrumbAction';

const mapStateToProps = (state, ownProps) => {
  console.log('~~~~~~~>>> AccountsLink.js >>> ', state.breadcrumb);
  return {
    breadcrumb:state.breadcrumb
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAccountsStateBreadcrumbDetails:()=>{
      console.log('~~~~~~~~~~~~~~ >>> mapDispatchToProps(..) @ fetchAccountsStateBreadcrumbDetails <<< ~~~~~~~~~~~~~~');
      dispatch(breadcrumbAction.fetchAccountsStateBreadcrumbDetails());
    }
  }
}

const AccountsLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsPage)

export default AccountsLink