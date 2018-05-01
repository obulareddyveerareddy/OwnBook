import React, { Component }       from 'react';
import {Route, Switch}            from 'react-router-dom';
import $ from 'jquery/dist/jquery';

import HomeNav                    from './common/HomeNav.js';
import AboutPage                  from './pages/AboutPage';
import ContactPage                from './pages/ContactPage';
import ResumePage                 from './pages/ResumePage';
import ProjectsLink               from './pages/ProjectsLink';

import M                          from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import './Home.css';

class HomeRouter extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    var instance = M.Tabs.init($('.tabs'), {});
  }

  render(){
    return(
      <div className="container-on">
        <div className="navbar-fixed">
          <nav>
            <HomeNav />
            <div className="row">
              <ul id="tabs-swipe-demo" className="tabs">
                <li className="tab col s3 m3"><a href="#about-page">About</a></li>
                <li className="tab col s3 m3"><a className="active" href="#projects-page">Projects</a></li>
                <li className="tab col s3 m3"><a href="#resume-page">Resume</a></li>
                <li className="tab col s3 m3"><a href="#contact-page">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="section main-section">
          <div id="profile-page-content" className="row">
            <div id="about-page" className="col s12"><AboutPage /></div>
            <div id="projects-page" className="col s12"><ProjectsLink title="Own-Account" /></div>
            <div id="resume-page" className="col s12"><ResumePage /></div>
            <div id="contact-page" className="col s12"><ContactPage /></div>
          </div>
        </div>
      </div>
    );
  }

}

export default HomeRouter;