import { connect }      from 'react-redux';
import AddAccountsPage  from './AddAccountsPage';
import * as MetadataAction   from './../../../../actions/MetadataAction';
import * as AccountsAction   from './../../../../actions/AccountsAction';

const mapStateToProps = (state, ownProps) => {
  console.log('6) ~~~~~~~>>> AddAccountsLink.js >>> ', state.metadata);
  return {
    metadata:state.metadata
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllCodeValuesByCodeIdList:(codeIds)=>{
      console.log('1) AddAccountsLink <::> getAllCodeValuesByCodeIdList ~~~ ', codeIds);
      dispatch(MetadataAction.getAllCodeValuesByCodeIdList(codeIds));
    },
    saveAccountInfo:(account)=>{
      console.log('2) AddAccountsLink <::> saveAccountInfo ~~~ ',account);
      dispatch(AccountsAction.saveAccountInfo(account));
    }
  }
}

const AddAccountsLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAccountsPage)

export default AddAccountsLink