import React from 'react';
import { Table } from 'antd';

import { Wrapper, Button, ButtonTitle } from './styles';

function PostsLists({data, columns}) {
  return (
    <Wrapper>
      <Table dataSource={data} columns={columns} />
      <Button>
        <ButtonTitle>Atualizar</ButtonTitle>
      </Button>
    </Wrapper>
  );
}

export default PostsLists;