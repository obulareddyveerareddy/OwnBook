import React        from 'react';
import $            from 'jquery/dist/jquery';
import M            from "materialize-css/dist/js/materialize.min.js";
import Breadcrumb   from './../common/Breadcrumb';

import './AccountsPageStyles.scss'

class AccountsPage extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            breadcrumb: this.props.breadcrumb
        }
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
    
    componentDidMount(){
        console.log('~~~~~~~~~~~~~~~~ >>> AccountsPage <:::> componentDidMount <<< ~~~~~~~~~~~~~~~~');
        this.props.fetchAccountsStateBreadcrumbDetails();
        $(document).ready(function(){
            M.FormSelect.init($('#codesSelectTag'));
            M.Modal.init($('.modal'));
        });
    }
    
    render(){
        return(
            <div className="container-o" id="accountsPageId">
                <Breadcrumb params={this.state.breadcrumb} />
                <div className="row">
                    <div className="col s12 m12">
                        <div className="d--flex--column">
                            <div className="pull--flex--right">
                                <button data-target="modal1"  class="btn modal-trigger waves-effect waves-light btn-small"><i class="material-icons left">add_to_queue</i>Add</button>
                                <a class="waves-effect waves-light btn-small"><i class="material-icons left">edit</i>Edit</a>
                            </div>
                            <div className="card responsive-table">
                                <table className="highlight striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Bank Name</th>
                                            <th>Account Holder Name</th>
                                            <th>Account Number</th>
                                            <th>Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
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

export default AccountsPage;