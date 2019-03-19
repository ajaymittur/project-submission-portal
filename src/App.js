import React from 'react'
import { Route, Switch } from 'react-router-dom' 
import Home from './components/Home'
import Dashboard from './components/Dashboard'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='*' render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App;
