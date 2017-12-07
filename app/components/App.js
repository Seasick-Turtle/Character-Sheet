import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Characters from './Characters';
import Character from './Character';
import Journal from './Journal';
import '../index.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <hr />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/characters' component={Characters}/>
            <Route path='/characters/character' component={Character} />
            <Route path='/journal' component={Journal}/>
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

