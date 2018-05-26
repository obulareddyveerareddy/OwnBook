import React        from 'react';
import $            from 'jquery/dist/jquery';
import M            from "materialize-css/dist/js/materialize.min.js";

class AddAccountsPage extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            account:{
                         "bankName":"ICICI Bank"
                        ,"accountHolderName":"Veera Reddy Obulareddy"
                        ,"accountNumber":"1234-9873-7643-6789"
                        ,"accountAliasName":"ICICI"
                        ,"accountType":"1001"
                        ,"cardDetails":[
                             { key:"billCycleStartDate", value:"1525631400000"}
                            ,{ key:"billCycleEndDate",  value:"1527618600000"}
                            ,{ key:"creditCreditLimit", value:"2390"}
                            ,{ key:"currentBalance",    value:"1000"}
                        ]
                    },
            metadata:this.props.metadata,
            cardDetails:{billCycleStartDate:"1525631400000", billCycleEndDate:"1527618600000", creditCreditLimit:"2390", currentBalance:"1000" }
        }
        this.updateState    = this.updateState.bind(this);
    }
    
    componentWillMount(){
        this.props.getAllCodeValuesByCodeIdList([100]);
    }
    
    componentWillReceiveProps(newProps) {
        console.log('~~~~~~~~~~~~~~~~ >>> AddAccountsPage <:::> componentWillReceiveProps <<< ~~~~~~~~~~~~~~~~', newProps);
        console.log(newProps.metadata);
        if( newProps.metadata !== this.props.metadata ){
            console.log('~~~~~~~~~~~~~~~~~ >>> Update State <<< ~~~~~~~~~~~~~~~~~');
            this.setState({ metadata: newProps.metadata });
            console.log(this.state.metadata);
        }
    }
    
    componentDidMount(){
        let self = this;
        $(document).ready(function(){
            let collapsibleElems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(collapsibleElems);
            
            let selectElems = document.querySelectorAll('select');
            self.selectInstance  = M.FormSelect.init(selectElems);
            
            let billCycleEndDate    = document.querySelectorAll('#bill_cycle_end_date');
            M.Datepicker.init(billCycleEndDate, {onSelect:(dt)=>{self.updateState({target:{value:new Date(dt).getTime()}}, 'billCycleEndDate', true)}});
            let billCycleStartDate  = document.querySelectorAll('#bill_cycle_start_date');
            M.Datepicker.init(billCycleStartDate, {onSelect:(dt)=>{self.updateState({target:{value:new Date(dt).getTime()}}, 'billCycleStartDate', true)}});
        
            
            
        });
    }
    
    updateState(event, key, isDetailEntry){
        console.log('updateState --- ', event.target.value, key);
        let account = Object.assign({}, this.state.account);
        
        if(isDetailEntry){
            if(!account['cardDetails']){
                account['cardDetails'] = [];
            }
            account['cardDetails'].push({key:key, value:event.target.value});
            let cardDetails     = Object.assign({}, this.state.cardDetails);
            cardDetails[key]    = event.target.value;
            this.setState({cardDetails});
        }else{
           account[key] = event.target.value; 
        }
        this.setState({account});
    }
    
    saveAccountInfo(event){
        event.preventDefault();
        console.log('~~~~~~~~~~~~~~~ >>> saveAccountInfo(.) <<< ~~~~~~~~~~~~~~~');
        console.log(JSON.stringify(this.state.account));
        this.props.saveAccountInfo(this.state.account);
    }
    
    render(){
        return(
            <div className="container-o" id="accountsPageId">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="d--flex--row pull--flex--right">
                            <button className="waves-effect waves-light btn-small" onClick={(event)=>{this.saveAccountInfo(event)}}>Save</button>
                            <a href="#/ownaccount/home/accounts/dashboard" className="waves-effect waves-light btn-small red">Back</a>
                        </div>
                        <div className="row card-panel" style={{boxShadow: 'none'}}>
                            <div className="col s6 m6">
                                <div className="d--flex--column">
                                    <div className="input-field">
                                        <input id="bank_name" type="text" value={this.state.account.bankName}  onChange={(event)=>this.updateState(event, 'bankName', false)} />
                                        <label for="bank_name">Bank Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="acc_holder_name" type="text" value={this.state.account.accountHolderName}  onChange={(event)=>this.updateState(event, 'accountHolderName', false)} />
                                        <label for="acc_holder_name">Account Holder Name</label>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6 m6">
                                            <input id="acc_number" type="text" value={this.state.account.accountNumber}  onChange={(event)=>this.updateState(event, 'accountNumber', false)} />
                                            <label for="acc_number">Account Number</label>
                                        </div>
                                        <div className="input-field col s6 m6">
                                            <input id="acct_alias" type="text" value={this.state.account.accountAliasName}  onChange={(event)=>this.updateState(event, 'accountAliasName', false)} />
                                            <label for="acct_alias">Alias Name</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s6 m6">
                                <div className="row">
                                    <div className="input-field col s12 m12">
                                        <select  value={this.state.account.accountType}  onChange={(event)=>this.updateState(event, 'accountType', false)}>
                                            <option value="1001">Credit</option>
                                            <option value="1002">Debit</option>
                                        </select>
                                        <label>Account Type</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12 m12">
                                        <ul class="collapsible" id="account_type" style={{boxShadow: 'none'}}>
                                            <li>
                                                <div class="collapsible-header">Credit Card</div>
                                                <div class="collapsible-body">
                                                    <div className="input-field">
                                                        <input id="bill_cycle_start_date" type="text" value={this.state.cardDetails.billCycleStartDate} className="datepicker"  disabled={this.state.account.accountType === "1002" ? true : false} />
                                                        <label for="bill_cycle_start_date">Bill Cycle Start Date</label>
                                                    </div>
                                                    <div className="input-field">
                                                        <input id="bill_cycle_end_date" type="text" value={this.state.cardDetails.billCycleEndDate} className="datepicker"  disabled={this.state.account.accountType === "1002" ? true : false} />
                                                        <label for="bill_cycle_end_date">Bill Cycle End Date</label>
                                                    </div>
                                                    <div className="input-field">
                                                        <input id="credit_limit" type="number" value={this.state.cardDetails.creditCreditLimit}   onChange={(event)=>this.updateState(event, 'creditCreditLimit', true)}  disabled={this.state.account.accountType === "1002" ? true : false}/>
                                                        <label for="credit_limit">Credit Limit</label>
                                                    </div>
                                                    <div className="input-field">
                                                        <input id="current_balance" type="number"  value={this.state.cardDetails.currentBalance}  onChange={(event)=>this.updateState(event, 'currentBalance', true)} disabled={this.state.account.accountType === "1002" ? true : false}/>
                                                        <label for="current_balance">Current Balance</label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="collapsible-header">Debit Card</div>
                                                <div class="collapsible-body">
                                                    <div className="input-field">
                                                        <input id="current_balance" type="number"  value={this.state.cardDetails.currentBalance}  onChange={(event)=>this.updateState(event, 'currentBalance', true)} disabled={this.state.account.accountType === "1001" ? true : false}/>
                                                        <label for="current_balance">Current Balance</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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

export default AddAccountsPage;