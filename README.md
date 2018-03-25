# react-douban
react基于webpack搭建的简单项目

## 配置路由
1. 安装`react-router`(这里是react-router 3.2.0版本)
    `npm install react-router -save`

2. 组件分离
```javascript
entry: {
     app: path.resolve(__dirname, 'src/js/app.js'),
     // 需要分离的第三方包名写在数组中
     vendors: ['react', 'react-dom','react-router']
 }
```
3. router.js中引入Router
```javascript
import React from 'react'
import { Router, Route, Link ,hashHistory} from 'react-router'
```
4. 根组件中的路由链接`<Link></Link>`与占位
```html
render() {
    return (
        <div>
            根容器组件
            <div>
                <Link to='/home'>首页</Link>
                <Link to='/movie'>电影</Link>
                <Link to='/about'>关于我们</Link>
                <Link to='/movie/movieList'>电影列表</Link>
                <Link to='/movie/movieDetail'>电影详细</Link>
            </div>
            <div>
              	<!-- 用来占位 -->
                {this.props.children}
            </div>
        </div>
    );
}
```
5. router.js中定义路由规则
```html
render(){
        return(
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
        )
    }
```
6. 设置默认页面(引入`IndexRoute`)
```html
<Route path="/" component={App}>
     // 当URL为 / 时渲染 HomeContainer
     <IndexRoute component={Home} />
 </Route>
```
7. 注意：Movie组件中也需要占位

## 绝对路由
- 避免路由嵌套层过多
1. 路由链接(缩短路径，去掉前面)
```html
<Link to="/movieList">新电影列表</Link>
<Link to="/movieDetail">新电影详情</Link>
```
2. 路由规则(前面加'/')
```html
<Route path="/movieList" component={MovieList} />
<Route path="/movieDetail" component={MovieDetail} />
```
3. 兼容旧路由(引入`Redirect`)
```jsx
<Redirect from="movieList" to="/movieList" />
<Redirect from="movieDetail" to="/movieDetail" />
```



## Histories

#### hashHistory

- 路径带`#`号，会造成组件渲染两次，但是兼容性好，可以用在低版本浏览器上

#### browserHistory

- 路径不带`#`号，不会造成组件渲染两次，但是兼容性不好，而且需要服务端渲染