/**
 * 项目入口文件
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Routers from './router/router';

ReactDOM.render(
    <div>
        <Routers />
    </div>,
    document.getElementById('app')
);