import React from 'react';
import { Table } from 'antd';


//{} vários imports de outro lugar.

//sReact que entende JS para html.

import { Wrapper } from './styles';

function UserList({dataSource, columns}) {
  return (
    <Wrapper>
      <Table dataSource={dataSource} columns={columns}/>
    </Wrapper>
  );
}

export default UserList;