import React from 'react';
import $ from 'jquery/dist/jquery';
import M from 'materialize-css/dist/js/materialize';

class OwnAccountSidebar extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        $(document).ready(()=>{
            var elem = $('.sidenav')[0];
            var instance = M.Sidenav.init(elem, {
                menuWidth: 300,
                edge: 'left',
                closeOnClick: false,
                draggable: true
              });
            instance.open();
            
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems);
        });
    }

    render(){
        let displayName, email, avatar_pic;
        if(this.props.params.profile){
            displayName = this.props.params.profile.displayName;
            email = this.props.params.profile.email;
            avatar_pic = this.props.params.profile.photos[0].value;
        }
        return(
            <div>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src="./public/assets/jumbotron-bg.jpg" width="250px" />
                            </div>
                            <a href="#!user"><img className="circle" src={avatar_pic} /></a>
                            <a href="#!name"><span className="white-text name">{displayName}</span></a>
                            <a href="#!email"><span className="white-text email">{email}</span></a>
                        </div>
                    </li>
                    <li><a className="waves-effect valign-wrapper" href="#/ownaccount/home/budget"><i className="material-icons">book</i>Budget</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="waves-effect valign-wrapper" href="#/ownaccount/home/accounts"><i className="material-icons">account_box</i>Accounts</a></li>
                    <li><div className="divider"></div></li>
                    <li>
                        <ul className="collapsible">
                            <li>
                                <a className="collapsible-header">Accounts <i className="material-icons">arrow_drop_down</i></a>
                                <div className="collapsible-body">
                                    <ul>
                                        <li>
                                            <a className="waves-effect valign-wrapper" href="#/ownaccount/home/accounts/manage">
                                                <i className="material-icons">account_box</i>Manage Accounts
                                            </a>
                                        </li>
                                        <li>
                                            <a className="waves-effect valign-wrapper" href="#/ownaccount/home/accounts/manage">
                                                <i className="material-icons">account_box</i>Add Accounts
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default OwnAccountSidebar;