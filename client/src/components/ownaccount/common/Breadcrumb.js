import React from 'react';

class Breadcrumb extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul className="breadcrumb black-text text-darken-2">
                <li className="valign-wrapper"><a href="#"><i class="material-icons" style={{paddingTop:'0px'}}>home</i>Home</a></li>
                <li>Budget</li>
            </ul>
        )
    }
}

export default Breadcrumb;