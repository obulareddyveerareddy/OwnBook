import React    from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Breadcrumb   from './../common/Breadcrumb';

import AccountsDashboardLink    from './dashboard/AccountsDashboardLink';
import AddAccountsLink          from './add/AddAccountsLink';
import './AccountsStyles.scss';

class OwnAccountRouter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            breadcrumb:this.props.breadcrumb
        }
    }
    
    componentDidMount(){
        this.props.fetchAccountsStateBreadcrumbDetails();
    }
    
    componentWillReceiveProps(newProps) {
        console.log('~~~~~~~~~~~~~~~~ >>> AccountsPage <:::> componentWillReceiveProps <<< ~~~~~~~~~~~~~~~~', newProps);
        console.log(newProps.breadcrumb);
        if( newProps.breadcrumb !== this.props.breadcrumb ){
            console.log('~~~~~~~~~~~~~~~~~ >>> Update State <<< ~~~~~~~~~~~~~~~~~');
            this.setState({ breadcrumb: newProps.breadcrumb });
            console.log(this.state.breadcrumb);
        }
    }

    render(){
        return(
            <div className="container-o" id="accountsPageId">
                <Breadcrumb params={this.state.breadcrumb} />
                <div className="row">
                    <div className="col s12 m12">
                        <Switch>
                            <Route path="/ownaccount/home/accounts/dashboard" exact component={AccountsDashboardLink} />
                            <Route path="/ownaccount/home/accounts/add" exact component={AddAccountsLink} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }

}

export default OwnAccountRouter;