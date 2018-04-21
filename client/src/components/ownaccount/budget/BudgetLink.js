import { connect }      from 'react-redux'
import fetch            from 'cross-fetch';
import BudgetPage       from './BudgetPage';

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
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