import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Articlepage from './pages/Articlepage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './NavBar';
import './App.css';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
    <div className="App">
      <NavBar />
        <div id="page-body"> 
        <Switch>
          <Route path = "/" component = {Homepage} exact />
          <Route path = "/about" component = {Aboutpage} />
          <Route path = "/article/:name" component = {Articlepage} />
          <Route path = "/articles-list" component = {ArticlesListPage} />
          <Route path = "" component = {NotFoundPage} />
        </Switch>

        </div>
    </div>

      </Router>

    );
  }
}


export default App;