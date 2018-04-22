import { connect }            from 'react-redux';
import fetch                  from 'cross-fetch';

import * as authUserProfileAction   from './../../../actions/AuthUserProfileAction';
import BudgetPage                   from './BudgetPage';

const mapStateToProps = (state, ownProps) => {
  console.log('~~~~~~~~~~~~~ >>> BudgetLink ',state);
  return {
    authUserProfile: state.authUserProfile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAuthUserProfile:()=>{
      console.log('~~~~~~~~~~~~~~~ >>> getAuthUserProfile:() <<< ~~~~~~~~~~~~~~~');
      dispatch(authUserProfileAction.getAuthUserProfile());
    }
  }
}

const BudgetLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetPage)

export default BudgetLink