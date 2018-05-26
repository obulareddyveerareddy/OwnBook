import {combineReducers}    from 'redux';
import authUserProfile      from './reducers/AuthUserProfileReducer';
import breadcrumb           from './reducers/BreadcrumbReducer';
import metadata             from './reducers/MetadataReducer';
import accounts             from './reducers/AccountsReducer';

const rootReducer = combineReducers({
    authUserProfile, breadcrumb, metadata, accounts
});

export default rootReducer;