import React from 'react';
import ReactDOM from 'react-dom';
import {UserList, PostsLists, CommentsLists} from './scenes';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <UserList />
    <PostsLists/>
    <CommentsLists/>
  </React.StrictMode>,
  document.getElementById('root')
);