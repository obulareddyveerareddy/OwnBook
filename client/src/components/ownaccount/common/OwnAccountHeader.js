import React    from 'react';
import $        from 'jquery/dist/jquery';
import M        from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class OwnAccountHeader extends React.Component{
    constructor(props){
        super(props);

        this.toggleSideNav = this.toggleSideNav.bind(this);
    }

    componentDidMount(){
        $(document).ready(()=>{
            var elem = $(".dropdown-trigger")[0];
            var instance = M.Dropdown.init(elem, {alignment:'right'});
        });
    }

    toggleSideNav = (event) =>{
        event.preventDefault();
        $(document).ready(()=>{
            var elem = $('.sidenav')[0];
            var instance = M.Sidenav.init(elem, {});
            instance.open();
        });
    }

    render(){
        return(
            <div className="navbar-fixed">
                <nav className="bg-luminous-vivid-pink">
                    <div className="nav-wrapper row">
                        <div className="header-title col s3 m3 hide-on-small-and-down">      
                            <span className="chapter-title">Own Account</span>
                        </div>
                        <div className="col s2 m2">
                            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        </div>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                                    <i className="fa fa-user" /><i className="material-icons right">arrow_drop_down</i>
                                </a>
                                <ul id="dropdown1" className="dropdown-content">
                                    <li><a href="#!">Profile</a></li>
                                    <li><a href="#!">Settings</a></li>
                                </ul>
                            </li>
                            <li><a href="badges.html"><i className="fa fa-sign-out" /></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default OwnAccountHeader;