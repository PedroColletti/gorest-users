import React from 'react';
import { Table } from 'antd';

import { Wrapper, Button, ButtonTitle } from './styles';

function CommentsLists({data, columns}) {
  return (
    <Wrapper>
      <Table dataSource={data} columns={columns}/>
      <Button>
        <ButtonTitle>Atualizar</ButtonTitle>
      </Button>
    </Wrapper>
  );
}

export default CommentsLists;