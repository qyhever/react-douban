import React from 'react';
import PropsTypes from 'prop-types';
import 'style/movie-list.styl';
import { getMovieList } from 'api/movie.js';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movieList: [],
      isLoadMore: false,
      pageInfo: {
        movieType: 'top250',
        pageIndex: 1,
        start: 0,
        count: 10
      }
    };
  }

  componentDidMount() {
    this._getMovieList(this.state.pageInfo.movieType);
  }

  componentDidUpdate() {
    this.listenScroll();
  }

  listenScroll() {
    const _this = this;
    this.refs.scrollWrapper.onscroll = function (e) {
      const el = e.target;
      if (el.scrollHeight === el.offsetHeight + el.scrollTop) {
        console.log('底部');
        if (_this.state.isLoadMore) {
          return;
        }
        _this.setState({isLoadMore: true});
        _this._getMovieList(_this.state.pageInfo.movieType);
      }
    };
  }

  _getMovieList(movieType) {
    let movieList = [...this.state.movieList]; // 拷贝数组
    
    let pageInfo = Object.assign({}, this.state.pageInfo); // 拷贝对象

    pageInfo.movieType = movieType;

    pageInfo.start = (pageInfo.pageIndex - 1) * pageInfo.count; // 分页公式

    pageInfo.pageIndex++;

    getMovieList(pageInfo).then(res => {
      this.setState({
        isLoading: false,
        movieList: [...this.state.movieList, ...res.subjects],
        pageInfo,
        isLoadMore: false
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
      <li key={item.id + Math.random()} onClick={() => this.toDetail(item.id)}>
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
      <ul className="movie-list" ref="scrollWrapper">
        {this.state.movieList.map((item)=>this.renderItem(item))}
        <li style={{display: this.state.isLoadMore ? 'block' : 'none'}}>
          <img src="../assets/images/loading.gif" alt=""/>
          <span>加载中...</span>
        </li>
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