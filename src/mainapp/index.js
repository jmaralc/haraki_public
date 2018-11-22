import React from 'react'
import { Switch, Route } from 'react-router-dom'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

const mainApp = () =>{
    return(
        <div className="about">
            <h1>[Haraki website]</h1>
        </div>
    )
}

export default mainApp