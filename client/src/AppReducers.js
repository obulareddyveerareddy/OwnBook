import {combineReducers}    from 'redux';
import authUserProfile      from './reducers/AuthUserProfileReducer';

const rootReducer = combineReducers({
    authUserProfile
});

export default rootReducer;