import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import Header from './Components/Header/index'
import Posts from './Containers/posts';
import Comments from './Containers/comments';
import Authors from './Containers/authors';
import store from './Reducer/index';
import reportWebVitals from './reportWebVitals';

const app = (
  <Provider store={store}>
    <BrowserRouter>
    <Header />
      <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route exact path="/comments">
            <Comments />
          </Route>
          <Route exact path="/authors">
            <Authors />
          </Route>
        </Switch>
    </BrowserRouter>
  </Provider>
  
)

ReactDOM.render(app,document.getElementById('root'));

reportWebVitals();
