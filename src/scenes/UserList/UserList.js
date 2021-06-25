import React from 'react';
import { Table } from 'antd';


//{} vários imports de outro lugar.

//sReact que entende JS para html.

import { Wrapper, Button, ButtonTitle } from './styles';

const UserList=({data, columns}) => {
  return (
    <Wrapper>
      <Table dataSource={data} columns={columns} />
      <Button>
        <ButtonTitle>Atualizar</ButtonTitle>
      </Button>
    </Wrapper>
  );
}

export default UserList;