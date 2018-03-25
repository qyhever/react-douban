import React from 'react';
import {Link} from 'react-router';

// 在根组件引入，相当于全局引入
import 'assets/base.css';
import 'style/app.styl';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="app-wrapper">
        <div className="app-header">豆瓣电影</div>
        <div className="app-nav">
          <Link to="/home">首页</Link>
          <Link to="/movie">电影</Link>
          <Link to="/about">联系我们</Link>
          
          {/*<Link to="/movie/movieList">电影列表</Link>
          <Link to="/movie/movieDetail">电影详细</Link>
          <Link to="/movie/movieSearch">电影搜索</Link>*/}
          

          {/*绝对路由
          <Link to="/movieList">电影列表</Link>
          <Link to="/movieDetail">电影详细</Link>
          <Link to="/movieSearch">电影搜索</Link>*/}
        </div>
        <div className="app-content">
          {this.props.children}
        </div>
        <div className="app-footer">
          版权所有@正在缓冲99%，允许侵权
        </div>
      </div>
    );
  }
}