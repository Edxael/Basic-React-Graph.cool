import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Banner from './img/SinLogo.png'
import Home from './01-Home'
import AddSinger from './02-AddSinger'
import FindSinger from './03-FindOneById'
import Update from './04-UpdateById'
import Delete from './05-DeleteById'


export default class extends Component {
  render() {

    return(
      <div >

        <Router>
          <div>
            <img className="LogoPic" src={Banner} alt="Missing Pic"/>

              <div>
                <Link className="menuButton" to="/">Home</Link> 
                <Link className="menuButton" to="/1">Add</Link> 
                <Link className="menuButton" to="/2">Find</Link> 
                <Link className="menuButton" to="/2">Update</Link> 
                <Link className="menuButton" to="/2">Delete</Link> 
                <Link className="menuButton" to="/2">Find One</Link> 
              </div>

              <hr />

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/1" component={AddSinger}/>
                <Route path="/2" component={FindSinger}/>
                <Route path="/3" component={Update}/>
                <Route path="/4" component={Delete}/>
              </Switch>

              
              <hr />

              <div>By: Edmundo Rubio.</div>
              
          </div>
        </Router>

      </div>
    )
  }
}