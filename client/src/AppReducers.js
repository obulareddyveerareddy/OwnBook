import {combineReducers}    from 'redux';
import authUserProfile      from './reducers/AuthUserProfileReducer';
import breadcrumb           from './reducers/BreadcrumbReducer';

const rootReducer = combineReducers({
    authUserProfile, breadcrumb
});

export default rootReducer;