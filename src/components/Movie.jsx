import React from 'react';

import 'style/movie.styl';

export default class Movie extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="movie-wrapper">

        <div className="movie-menu">
          <a href="javascript:void(0);">正在热映</a>
          <a href="javascript:void(0);">即将上映</a>
          <a href="javascript:void(0);">TOP250</a>
        </div>

        <div className="movie-main">
          <div className="movie-search">
            <input type="text" className="search-bar" />
            <button className="search-btn">搜索</button>
          </div>
          <div className="movie-content">
            {this.props.children}
          </div>
        </div>

      </div>
    )
  }
}