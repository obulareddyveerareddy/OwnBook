import React        from 'react';
import $            from 'jquery/dist/jquery';
import M            from "materialize-css/dist/js/materialize.min.js";



class AccountsDashboardPage extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            breadcrumb: this.props.breadcrumb,
            accounts:[]
        }
    }
    
    
    componentWillReceiveProps(newProps) {
        console.log('~~~~~~~~~~~~~~~~ >>> AccountsDashboardPage <:::> componentWillReceiveProps <<< ~~~~~~~~~~~~~~~~', newProps);
        console.log(newProps.accounts);
        if( newProps.accounts !== this.props.accounts ){
            console.log('~~~~~~~~~~~~~~~~~ >>> Update State <<< ~~~~~~~~~~~~~~~~~');
            this.setState({ accounts: newProps.accounts });
            console.log(this.state.accounts);
        }
    }
    
    componentDidMount(){
        console.log('~~~~~~~~~~~~~~~~ >>> AccountsDashboardPage <:::> componentDidMount <<< ~~~~~~~~~~~~~~~~');
        let self = this;
        $(document).ready(function(){
            M.FormSelect.init($('#codesSelectTag'));
            
            self.props.getAllAccountsByAppUserId();
        });
    }
    
    render(){
        let accounts = [];
        if(this.state.accounts){
            accounts = this.state.accounts;
        }
        return(
            <div className="container-o" id="accountsPageId">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="d--flex--column">
                            <div className="pull--flex--right">
                                <a href="#/ownaccount/home/accounts/add"  class="btn waves-effect waves-light btn-small">
                                    <i class="material-icons left">add_to_queue</i>Add New Account
                                </a>
                            </div>
                            <div className="card responsive-table">
                                <table className="highlight striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Alias Name</th>
                                            <th>Bank Name</th>
                                            <th>Account Holder Name</th>
                                            <th>Account Number</th>
                                            <th>Type</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            accounts.map((item)=>{
                                                return <tr>
                                                            <td>#</td>
                                                            <td>{item.aliasName}</td>
                                                            <td>{item.bankName}</td>
                                                            <td>{item.accountHolderName}</td>
                                                            <td>{item.accountNumber}</td>
                                                            <td>{item.accountType}</td>
                                                            <td>
                                                                <i class="material-icons">clear</i>
                                                            </td>
                                                        </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <div id="modal1" class="modal">
                                    <div class="modal-content">
                                      <h4>Modal Header</h4>
                                      <p>A bunch of text</p>
                                    </div>
                                    <div class="modal-footer">
                                      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default AccountsDashboardPage;