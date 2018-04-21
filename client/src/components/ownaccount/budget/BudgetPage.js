import React from 'react';
import { NavLink }  from 'react-router-dom';
import IncomeCard   from './../common/IncomeCard';
import Breadcrumb   from './../common/Breadcrumb';

class DashboardPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataSet:[]
    }
    this.addNewRecordHandler = this.addNewRecordHandler.bind(this);
  }

  addNewRecordHandler(event){
    console.log('-------- Add new record function ---------',event);
    event.preventDefault();
  }

  render(){
    let {auth} = this.props;
    return(
      <div className="container-o">
        <div className="row">
          <div className="col s12 m12">
            <Breadcrumb/>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <IncomeCard />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;