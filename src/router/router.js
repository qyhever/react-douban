/**
 * 路由配置文件
 */
import React from 'react';
import {
  Router,
  Route,
  Link,
  browserHistory,
  hashHistory,
  IndexRoute,
  Redirect
} from 'react-router';

import App from '@/components/App';
import Home from '@/components/Home';
import Movie from '@/components/Movie';
import MovieList from '@/components/MovieList';
import MovieDetail from '@/components/MovieDetail';
import MovieSearch from '@/components/MovieSearch';
import About from '@/components/About';

export default class Routers extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="home" component={Home} />
          <Route path="movie" component={Movie}>
            <Route path="movieList" component={MovieList} />
            <Route path="movieDetail" component={MovieDetail} />
            <Route path="movieSearch" component={MovieSearch} />
          </Route>
          <Route path="about" component={About} />
        </Route>
      </Router>
    );
  }
}