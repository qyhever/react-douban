import React from 'react';
import PropsTypes from 'prop-types';
import 'style/movie-list.styl';
import { getMovieList } from 'api/movie.js';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movieList: []
    };
  }

  componentDidMount() {
    getMovieList().then(res => {
      this.setState({
        isLoading: false,
        movieList: res.subjects
      });
      console.log(res);
    });
  }

  // 跳转到详情
  toDetail(id) {
    this.context.router.push(`/movie/movieDetail/${id}`);
  }

  // 渲染列表
  renderItem (item) {
    return (
      <li key={item.id} onClick={() => this.toDetail(item.id)}>
        <h2>{item.title}</h2>
        <p><b>年份：</b>{item.year}</p>
        <p><b>类别：</b>{item.genres.join('、')}</p>
        <p><b>评分：</b>{item.rating.average}</p>
      </li>
    );
  }
  
  renderLoading() {
    return (
      <div>加载中...</div>
    );
  }

  renderMovieList() {
    return (
      <ul className="movie-list">
        {this.state.movieList.map((item)=>this.renderItem(item))}
      </ul>
    );
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoading();
    }
    return this.renderMovieList();
  }
}

MovieList.contextTypes = {
  router: PropsTypes.object
};