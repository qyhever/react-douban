import React from 'react';
import 'style/movie-detail.styl';
import { getMovieDetail } from 'api/movie.js';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movieDetail: {}
    };
  }

  componentDidMount() {
    console.log(this.props.params.id);
    const id = this.props.params.id;
    getMovieDetail(id).then(res => {
      this.setState({
        isLoading: false,
        movieDetail: res
      });
      console.log(res);
    });
  }

  renderLoading() {
    return (
      <div>加载中...</div>
    );
  }

  renderMovieDetail() {
    const value = this.state.movieDetail;
    return (
      <div className="movie-detail-wrapper">
        <h2 className="title">{value.title}</h2>
        <p><b>导演：</b>{value.directors[0].name}</p>
        <p><b>类型：</b>{value.genres.join('、')}</p>
        <p><b>国家：</b>{value.countries.join('、')}</p>
        <p><b>评分：</b>{value.rating.average}</p>
        <p><b>时间：</b>{value.year}</p>
        <p><b>又名：</b>{value.aka.join('、')}</p>
        <p><b>剧情简介：</b></p>
        <p className="summary">{value.summary}</p>
      </div>
    );
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoading();
    }
    return this.renderMovieDetail();
  }
}