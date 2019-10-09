import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Comments from './components/Comments';
import Posts from './components/Posts';
import Photos from './components/Photos';
import Dropdown from './components/Dropdown';
import Form from './components/Form';

const routing = (
  <Router>
    <header>
      <Dropdown />
    </header>
    <Route exact path="/" component={App} />
    <Route path="/comments" component={Comments} />
    <Route path="/posts" component={Posts} />
    <Route path="/photos" component={Photos} />
    <Route path="/form" component={Form} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
