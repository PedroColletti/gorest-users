import React from 'react';
import UserList from './UserList';

//faz chamada da API e alimenta user list.

function UserListContainer() {

    const dataSource = [
        {
          key: '1',
          name: 'Edicarlos Lopes',
          email: 'edicarlos@beonup.com.br',
          gender: 'Male',
          status: 'Active',
        },
        {
          key: '2',
          name: 'Pedro Colletti',
          email: 'pedrocolletti@beonup.com.br',
          gender: 'Male',
          status: 'Active',
        },
        {
          key: '3',
          name: 'Marlon Metidiere',
          email: 'marlonmetidieri@beonup.com.br',
          gender: 'Male',
          status: 'Active',
        },
        {
          key: '4',
          name: 'Fernando Silva',
          email: 'fersilva@beonup.com.br',
          gender: 'Male',
          status: 'Active',
        },
        {
          key: '5',
          name: 'Felipe Silva',
          email: 'felipesilva@beonup.com.br',
          gender: 'Male',
          status: 'Active',
        },
        {
          key: '6',
          name: 'Lucas Pessoa',
          email: 'lucaspessoa@beonup.com.br',
          gender: 'Male',
          status: 'Active',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
      ];

  return <UserList dataSource={dataSource} columns={columns}/>;
  
}
export default UserListContainer;