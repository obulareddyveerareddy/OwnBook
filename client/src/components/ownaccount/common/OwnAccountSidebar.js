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
                menuWidth: 300, // Default is 300
                edge: 'left', // Choose the horizontal origin
                closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true // Choose whether you can drag to open on touch screens
              });
            instance.open();
        });
    }

    render(){
        return(
            <div>
                <ul id="slide-out" class="sidenav sidenav-fixed">
                    <li>
                        <div class="user-view">
                            <div class="background">
                                <img src="./assets/jumbotron-bg.jpg" width="250px" />
                            </div>
                            <a href="#!user"><img class="circle" src="images/yuna.jpg" /></a>
                            <a href="#!name"><span class="white-text name">John Doe</span></a>
                            <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a class="waves-effect" href="#!"><i className="fa fa-usd" />Budget</a></li>
                    <li><div class="divider"></div></li>
                </ul>
            </div>
        );
    }
}

export default OwnAccountSidebar;