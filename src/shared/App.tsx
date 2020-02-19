import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import classnames from 'classnames/bind';

import Home from 'pages/home/Home';
import Counter from 'pages/counter/Counter';
import Posts from 'pages/posts/Posts';
import PostsDetail from 'pages/posts/PostsDetail';
import PostsCreate from 'pages/posts/PostsCreate';

import styles from './App.scss';

const cx = classnames.bind(styles);

class App extends Component {
  render() {
    return (
      <div className={cx('app-container')}>
        <main className={cx('main-container')}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/counter" component={Counter} />
            <Route path="/posts/create" component={PostsCreate} />
            <Route path="/posts/:id" component={PostsDetail} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
