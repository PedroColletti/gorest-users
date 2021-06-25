import React, {useState, useEffect}  from  'react';
import UserList from './UserList';
import { columns } from './dataTable';

//faz chamada da API e alimenta user list.

function UserListContainer() {

  const [dataSource, setDataSource] = useState([]); 
  
  const getUserList= ()=> {
    fetch("https://gorest.co.in/public-api/users")
    .then((resp) => resp.json())
    .then(function(respData) {
      setDataSource(respData.data)
    }).catch(function(error) {
        console.log(error.message)
    });
  };
  
  useEffect(()=>{
    getUserList();
  },[])

  return <UserList data={dataSource} columns={columns}/>;
}

export default UserListContainer;

//função que sempre usa. 1+1.. Atalho para criar outras funções. Hooks UseState, Hooks UseEffect e ArrowFunction.
//axios e fetch.