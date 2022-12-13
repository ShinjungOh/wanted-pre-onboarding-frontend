import React, {
  useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { getHasAccessToken } from '../../lib/utils/accessTokenStore';
import { Todo } from '../../lib/types/todo.interface';
import TodoCreate from '../components/todo/TodoCreate';
import TodoList from '../components/todo/TodoList';

const TodoPage = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [createInput, setCreateInput] = useState('');

  const onChangeCreateInput = () => {
    // todo: onChangeCreateInput
  };

  const onSubmitCreate = () => {
    // todo: onSubmitCreate
  };

  const onToggleIsCompleted = () => {
    // todo: onToggleisCompleted
  };

  const onClickDelete = () => {
    // todo: onClickDelete
  };

  const onClickEdit = () => {
    // todo: onClickEdit
  };

  const onClickLogout = () => {
    // TODO: Logout
  };

  useEffect(() => {
    if (!getHasAccessToken()) {
      navigate('/');
    }
  }, []);

  return (
    <Container>
      <Header>
        <ButtonContainer>
          <Button
            color="secondary"
            onClick={onClickLogout}
            style={{ height: '32px', flex: 'unset' }}
          >
            로그아웃
          </Button>
        </ButtonContainer>
        <Heading>할 일</Heading>
      </Header>
      <Body>
        <TodoList
          todos={todos}
          onToggleIsCompleted={onToggleIsCompleted}
          onClickDelete={onClickDelete}
        />
      </Body>
      <TodoCreate
        onChange={onChangeCreateInput}
        onSubmit={onSubmitCreate}
        value={createInput}
      />
    </Container>
  );
};

export default TodoPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const Header = styled.header`
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 32px;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #343a40;
  margin: 0;
  text-align: center;
`;

const Body = styled.section`
  width: 100%;
  height: calc(100% - 250px);
  overflow-y: auto;
`;

const Button = styled.button`
  color: #fff;
  background: #487fef;
  border: unset;
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 500;
  height: 48px;
  flex: 1 1 0;
  cursor: pointer;
  transition: all 300ms;
  
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #d4d4d469;
  }
`;
