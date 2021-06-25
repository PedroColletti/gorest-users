import React, {useState, useEffect}  from  'react';
import PostsLists from './PostsLists';
import { columns } from './dataTable';



function PostsListsContainer() {

  const [dataSource, setDataSource] = useState([]); 
  
  const getPostsLists= ()=> {
    fetch("https://gorest.co.in/public-api/posts")
    .then(resp => resp.json())
    .then(function(respData) {
      setDataSource(respData.data)
    }).catch(function(error) {
        console.log(error.message)
    });
  };
  
  useEffect(()=>{
    getPostsLists();
  },[])

  return <PostsLists data={dataSource} columns={columns}/>;
}

export default PostsListsContainer;