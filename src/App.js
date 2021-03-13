import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Pricing from './components/Pricing/Pricing'
import SingIn from './components/SingIn/SingIn'
import SingUp from './components/SingUp/SingUp'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/price">Price</Link>
            </li>
            <li>
              <Link to="/sing-up">Sing Up</Link>
            </li>
            <li>
              <Link to="/sing-in">Sing In</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sing-up">
            <SingUp />
          </Route>
          <Route path="/sing-in">
            <SingIn />
          </Route>
          <Route path="/price">
            <Pricing />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
