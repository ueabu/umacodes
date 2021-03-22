import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import UptillPrivacy from './pages/UptillPrivacy';

class App extends React.Component {
  render() {
    return (
      <main>
        {/* <Nav /> */}
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/uptillprivacy" exact component={UptillPrivacy} />


          </Switch>
        </Router>
      </main>)
  }
}

export default App;
