import React from 'react';
import $ from 'jquery/dist/jquery';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class HomeNav extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="profile-page-header" className="card">
          <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="./assets/user-profile-bg.jpg" alt="user background" />                    
          </div>
          <div className="card-content">
            <div className="row sm-height">                    
              <div className="col s12 m2">
                <div className="card-profile-image">
                  <img src="./assets/avatar.jpg" alt="profile image" className="circle z-depth-2 responsive-img activator" />
                </div>
              </div>
              <div className="col s12 m5">
                <div className="card-title grey-text text-darken-4 name-position">
                  <p>Veera Reddy ObulaReddy</p>
                </div>
              </div>
              <div className="col s12 m5 right-align">
                <a className="btn-floating activator waves-effect waves-light yellow darken-4 right">
                    <i className="fa fa-user"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card-reveal black-text">
              <div className="row">
                <div className="col s12 m3">
                  <p><i className="mdi-communication-email cyan-text text-darken-2"></i> Veera Reddy ObulaReddy</p>
                </div>
                <div className="col s12 m3">
                  <p><i className="mdi-communication-email cyan-text text-darken-2"></i> veerareddy.obula@gmail.com</p>
                </div>
                <div className="col s12 m3">
                <p><i className="mdi-action-perm-phone-msg cyan-text text-darken-2"></i> +91-8105555322, +91-9440949111</p>
                </div>
                <div className="col s12 m3">
                  <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <span className="card-title" style={{fontSize: "16px", fontWeight: "200"}}><i className="fa fa-times"></i></span>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default HomeNav;