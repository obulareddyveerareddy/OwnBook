import React from 'react';
import { NavLink }  from 'react-router-dom';
import IncomeCard   from './../common/IncomeCard';
import Breadcrumb   from './../common/Breadcrumb';

import $        from 'jquery/dist/jquery';
import M        from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class DashboardPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataSet:[],
      income:{title:'Income', 
              description:'Actual take home pay. If your income varies, estimate and adjust as needed.'},
      breadcrumb:this.props.breadcrumb
    }
  }
    
  componentWillReceiveProps(newProps) {
      console.log('~~~~~~~~~~~~~~~~ >>> DashboardPage <:::> componentWillReceiveProps <<< ~~~~~~~~~~~~~~~~', newProps);
      console.log(newProps.breadcrumb);
      if( newProps.breadcrumb !== this.props.breadcrumb ){
          console.log('~~~~~~~~~~~~~~~~~ >>> Update State <<< ~~~~~~~~~~~~~~~~~');
          this.setState({ breadcrumb: newProps.breadcrumb });
          console.log(this.state.breadcrumb);
      }
  }

  componentDidMount(){
    this.props.fetchBudgetStateBreadcrumbDetails();
    $(document).ready(()=>{
      var elem = $('.collapsible')[0];
      var instance = M.Collapsible.init(elem, {accordion: false});
    });
  }

  render(){
    let {auth} = this.props;
    return(
      <div className="container-o">
        <Breadcrumb params={this.state.breadcrumb} />
        <div className="row">
          <div className="col s12 m6">
            <ul className="collapsible expandable">
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div  className="valign-wrapper"><i class="material-icons">attach_money</i>Income</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body">
                  <IncomeCard title={this.state.income.title} description={this.state.income.description} />
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div  className="valign-wrapper"><i class="material-icons">input</i>Giving</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div className="valign-wrapper"><i class="material-icons">save</i>Savings</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div className="valign-wrapper"><i class="material-icons">home</i>Housing</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div className="valign-wrapper"><i class="material-icons">motorcycle</i>Transportation</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div className="valign-wrapper"><i class="material-icons">fastfood</i>Food</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div className="valign-wrapper"><i class="material-icons">style</i>Lifestyle</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div className="valign-wrapper"><i class="material-icons">perm_media</i>Insurance & Tax</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div className="valign-wrapper"><i class="material-icons">credit_card</i>Debit</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;