import { connect }            from 'react-redux';
import fetch                  from 'cross-fetch';

import * as authUserProfileAction   from './../../../actions/AuthUserProfileAction';
import BudgetPage                   from './BudgetPage';

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

const BudgetLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetPage)

export default BudgetLink