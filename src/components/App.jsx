import React from 'react';
import {Link} from 'react-router';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        根组件
        <div>
          <Link to="/home">首页</Link>
          <Link to="/movie">电影</Link>
          <Link to="/about">联系我们</Link>
          <Link to="/movie/movieList">电影列表</Link>
          <Link to="/movie/movieDetail">电影详细</Link>
          <Link to="/movie/movieSearch">电影搜索</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}