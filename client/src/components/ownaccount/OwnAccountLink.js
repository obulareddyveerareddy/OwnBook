import { connect }            from 'react-redux';
import fetch                  from 'cross-fetch';

import * as authUserProfileAction   from './../../actions/AuthUserProfileAction';
import OwnAccountRouter             from './OwnAccountRouter';

const mapStateToProps = (state, ownProps) => {
  console.log('~~~~~~~>>> OwnAccountLink.js >>> ', state.authUserProfile);
  return {
    authUserProfile: state.authUserProfile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAuthUserProfile:()=>{
      dispatch(authUserProfileAction.getAuthUserProfile());
    }
  }
}

const OwnAccountLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnAccountRouter)

export default OwnAccountLink