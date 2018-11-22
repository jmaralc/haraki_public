import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import { createStore } from 'redux'
import { MuiThemeProvider } from '@material-ui/core/styles';


import HkTheme from './theme'
import HkAppBar from './appbar'

import Account from './mainapp/account'
import Dojos from './mainapp/dojos'
import Events from './mainapp/events'
import Multimedia from './mainapp/multimedia'
import NoMatch from './mainapp/nomatch'
import Login from './init/login'

import store from './store'

import './main.css'

const rootElement = document.querySelector('#root');


class App extends React.Component {

  state= {
    loggedIn: false
  }
  
  render(){
    const {loggedIn} = this.state

    if(loggedIn){
      return(
          <MuiThemeProvider theme={HkTheme}>
            <HkAppBar />
            { loggedIn?
            <Switch>
              <Route exact path="/" component={Account} />
              <Route path="/account" component={Account}/>
              <Route path="/dojos" component={Dojos}/>
              <Route path="/events" component={Events}/>
              <Route path="/multimedia" component={Multimedia}/>
              <Route component={NoMatch}/>
            </Switch>:
            <Switch>
              <Route exact path="/" component={Login} />
              <Route component={NoMatch}/>
            </Switch>
            }
          </MuiThemeProvider>
      )
    }
    else{
      return(
          <MuiThemeProvider theme={HkTheme}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route component={NoMatch}/>
            </Switch>
          </MuiThemeProvider>
      )
    }
     
  }
}

if (rootElement){
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    rootElement
  )
}