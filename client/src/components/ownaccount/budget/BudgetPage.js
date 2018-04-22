import React from 'react';
import { NavLink }  from 'react-router-dom';
import IncomeCard   from './../common/IncomeCard';
import Breadcrumb   from './../common/Breadcrumb';

import $        from 'jquery/dist/jquery';
import M        from "materialize-css/dist/js/materialize.min.js";
import 'font-awesome/css/font-awesome.css';
import "materialize-css/dist/css/materialize.min.css";

class DashboardPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataSet:[],
      income:{title:'Income', 
              description:'Actual take home pay. If your income varies, estimate and adjust as needed.'}
    }
  }

  componentDidMount(){
    $(document).ready(()=>{
      var elem = $('.collapsible')[0];
      var instance = M.Collapsible.init(elem, {accordion: false});
    });
    this.props.getAuthUserProfile();
  }

  componentWillReceiveProps(prevProps, nextProps){
    console.log('~~~~~~~~~~~~~~~~ >>> componentWillReceiveProps(.,.) ', nextProps);
  }

  render(){
    let {auth} = this.props;
    return(
      <div className="container-o">
        <Breadcrumb/>
        <div className="row">
          <div className="col s12 m6">
            <ul className="collapsible expandable">
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div><i className="fa fa-indent" aria-hidden="true"></i>Income</div>
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
                    <div><i className="fa fa-fighter-jet" />Giving</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div><i className="fa fa-floppy-o" />Savings</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div><i className="fa fa-home" />Housing</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div><i className="fa fa-motorcycle" />Transportation</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div><i className="fa fa-cutlery"/>Food</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div><i className="fa fa-id-card-o"/>Lifestyle</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div><i className="fa fa-medkit" />Insurance & Tax</div>
                    <div><span className="badge blue">4</span></div>
                  </div>
                </div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
                    <div><i className="fa fa-rupee"/>Debit</div>
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