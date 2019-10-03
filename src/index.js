import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/header.scss';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Comments from './components/Comments';
import Posts from './components/Posts';
import Photos from './components/Photos';
import Dropdown from './components/Dropdown';

const routing = (
  <Router>
    <header>
      <Dropdown />
      <Route exact path="/" component={App} />
      <Route path="/comments" component={Comments} />
      <Route path="/posts" component={Posts} />
      <Route path="/photos" component={Photos} />
    </header>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
