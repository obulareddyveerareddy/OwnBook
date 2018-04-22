import React    from 'react';
import $        from 'jquery/dist/jquery';
import M        from "materialize-css/dist/js/materialize.min.js";
import 'font-awesome/css/font-awesome.css';
import "materialize-css/dist/css/materialize.min.css";

class IncomeCard extends React.Component{
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        $(document).ready(()=>{
            var instance = M.Tabs.init($('.tabs'), {});
        })
    }

    render(){
        return(
            <div>
                <div className="row">
                    <span className="card-title">{this.props.title}</span>
                    <p>{this.props.description}</p>
                </div>
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs tabs-fixed-width">
                            <li className="tab"><a className="active" href="#income-details">Details</a></li>
                            <li className="tab"><a href="#add-new-income"><i className="fa fa-plus" /> Add Income</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div id="income-details">
                            <table className="highlight responsive-table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Label</th>
                                    <th>Planned</th>
                                    <th>Recieved</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><a href="#"><i className="fa fa-trash" /></a></td>
                                    <td>Alvin</td>
                                    <td>$0.87</td>
                                    <td><label><input type="checkbox" checked="checked" disabled="disabled" /> <span></span></label></td>
                                </tr>
                                <tr>
                                    <td><a href="#"><i className="fa fa-trash" /></a></td>
                                    <td>Alan</td>
                                    <td>$3.76</td>
                                    <td><label><input type="checkbox" disabled="disabled" /> <span></span></label></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id="add-new-income">
                            <div className="row">
                                <div className="input-field col s12 m6">
                                    <input id="label" type="text" placeholder="Label" />
                                    <label htmlFor="first_name">Label</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <input id="planned" type="text" placeholder="$0.000" />
                                    <label htmlFor="last_name">Planned</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 m6">
                                    <label><input type="checkbox" /> <span>Recieved</span></label>
                                </div>
                                <div className="col s12 m6">
                                    <button className="btn waves-effect waves-light" type="submit" name="action">
                                        <i className="fa fa-plus" /> Add Income
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IncomeCard;