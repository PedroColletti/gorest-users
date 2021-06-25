import React, {useState, useEffect}  from  'react';
import CommentsLists from './CommentsLists';
import { columns } from './dataTable';



function CommentsListsContainer() {

  const [dataSource, setDataSource] = useState([]); 
  
  const getCommentsLists= ()=> {
    fetch("https://gorest.co.in/public-api/comments")
    .then(resp => resp.json())
    .then(function(respData) {
      setDataSource(respData.data)
    }).catch(function(error) {
        console.log(error.message)
    });
  };
  
  useEffect(()=>{
    getCommentsLists();
  },[])

  return <CommentsLists data={dataSource} columns={columns}/>;
}

export default CommentsListsContainer;