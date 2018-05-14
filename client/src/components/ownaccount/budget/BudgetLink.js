import { connect }            from 'react-redux';
import fetch                  from 'cross-fetch';

import * as authUserProfileAction   from './../../../actions/AuthUserProfileAction';
import * as breadcrumbAction        from './../../../actions/BreadcrumbAction';
import BudgetPage                   from './BudgetPage';

const mapStateToProps = (state, ownProps) => {
  return {
    breadcrumb:state.breadcrumb
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBudgetStateBreadcrumbDetails:() =>{
      dispatch(breadcrumbAction.fetchBudgetStateBreadcrumbDetails());
    }
  }
}

const BudgetLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetPage)

export default BudgetLink