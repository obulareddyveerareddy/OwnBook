import React    from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import AccountsLink           from './accounts/AccountsLink';
import BudgetLink             from './budget/BudgetLink';
import OwnAccountHeader       from './common/OwnAccountHeader';
import OwnAccountSidebar      from './common/OwnAccountSidebar';
import './OwnAccount.css';

class OwnAccountRouter extends React.Component{

  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.props.getAuthUserProfile();
  }

  render(){
    return(
      <div className="wrapper">
        <header>
          <OwnAccountHeader />
        </header>
        <div className="row">
          <div className="col s12 m2" style={{padding:'0px'}}>
            <aside>
              <OwnAccountSidebar params={this.props.authUserProfile} />
            </aside>
          </div>
          <div className="col s12 m10">
            <Switch>
              <Route path="/ownaccount/home/budget" exact component={BudgetLink} />
              <Route path="/ownaccount/home/accounts/**" exact component={AccountsLink} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }

}

export default OwnAccountRouter;