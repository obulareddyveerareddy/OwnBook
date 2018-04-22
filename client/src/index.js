import React        from 'react';
import ReactDOM     from 'react-dom';
import $            from 'jquery/dist/jquery';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { HashRouter , Router }      from 'react-router-dom';
import {Provider}                   from 'react-redux';
import {Route, Switch, Redirect}    from 'react-router-dom';
import ApolloClient                 from "apollo-boost";
import registerServiceWorker        from './registerServiceWorker';

import HomeRouter     from './components/home/HomeRouter';
import OwnAccountLink from './components/ownaccount/OwnAccountLink';
import configureStore from './AppStore';
import './index.css';

import gql from "graphql-tag";

const store = configureStore();
const client = new ApolloClient({uri: "http://localhost:5000/graphql"});
client.query({
    query: gql`
    {
        author {
            firstName,
            lastName
            
        }
    }
    `
  }).then(result => console.log(result));

export default class Main extends React.Component {
    render() {
      return (
        <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/ownaccount/**" exact component={OwnAccountLink} />
            <Route path="/" component={HomeRouter} />
          </Switch>
        </HashRouter>
        </Provider>
      );
    }
  }
  
  ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
