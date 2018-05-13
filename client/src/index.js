import React        from 'react';
import ReactDOM     from 'react-dom';
import $            from 'jquery/dist/jquery';
import M            from "materialize-css/dist/js/materialize.min.js";
import { HashRouter , Router }      from 'react-router-dom';
import {Provider}                   from 'react-redux';
import {Route, Switch, Redirect}    from 'react-router-dom';
import { ApolloProvider }           from 'react-apollo';
import "materialize-css/dist/css/materialize.min.css";
import './index.scss';

//import registerServiceWorker        from './registerServiceWorker';
import HomeRouter       from './components/home/HomeRouter';
import OwnAccountLink   from './components/ownaccount/OwnAccountLink';
import configureStore   from './AppStore';

const store = configureStore();


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

//ReactDOM.render(<Main />, document.getElementById('root'));
//registerServiceWorker();
