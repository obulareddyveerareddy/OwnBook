import React from 'react';

class Breadcrumb extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul className="breadcrumb black-text text-darken-2">
                <li><a href="#"><i className="fa fa-home"/> Home</a></li>
                <li>Budget</li>
            </ul>
        )
    }
}

export default Breadcrumb;