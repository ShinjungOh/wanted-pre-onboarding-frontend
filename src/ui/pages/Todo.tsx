import React, {
  ChangeEvent, FormEvent,
  useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { clearAccessToken, getHasAccessToken } from '../../lib/utils/accessTokenStore';
import { Todo } from '../../lib/types/todo.interface';
import TodoCreate from '../components/todo/TodoCreate';
import TodoList from '../components/todo/TodoList';
import todoRest from '../../lib/api/todoRest';

const TodoPage = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [createInput, setCreateInput] = useState('');

  const onChangeCreateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateInput(value);
  };

  const onSubmitCreate = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await todoRest.postTodo(createInput);
      setTodos([
        ...todos,
        response.data,
      ]);
      setCreateInput('');
    } catch (e) {
      alert('할 일 등록에 실패했습니다.');
    }
  };

  const onToggleIsCompleted = async (id: number) => {
    try {
      const todoItem = todos.find((todo) => todo.id === id);
      if (todoItem) {
        const response = await todoRest.putTodo({
          ...todoItem,
          isCompleted: !todoItem.isCompleted,
        });
        setTodos(todos.map((todo) => (todo.id === response.data.id ? response.data : todo)));
      }
    } catch (e) {
      alert('할 일 수정에 실패했습니다.');
    }
  };

  const onClickDelete = async (id: number) => {
    try {
      const isConfirm = confirm('할 일을 삭제하시겠습니까?');
      if (!isConfirm) {
        return;
      }
      await todoRest.deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (e) {
      alert('할 일 삭제에 실패했습니다.');
    }
  };

  const onClickEdit = async (id: number, todo: string) => {
    try {
      const todoItem = todos.find((todo) => todo.id === id);
      if (todoItem) {
        const response = await todoRest.putTodo({
          ...todoItem,
          todo,
        });
        setTodos(todos.map((todo) => (todo.id === response.data.id ? response.data : todo)));
      }
    } catch (e) {
      alert('할 일 수정에 실패했습니다.');
    }
  };

  const onClickLogout = () => {
    clearAccessToken();
    navigate('/', { replace: true });
  };

  const getTodos = async () => {
    try {
      const response = await todoRest.getTodos();
      setTodos(response.data);
    } catch (e) {
      alert('할 일 불러오기에 실패했습니다.');
    }
  };

  useEffect(() => {
    if (!getHasAccessToken()) {
      navigate('/', { replace: true });
    }

    getTodos();
  }, []);

  return (
    <Container>
      <Header>
        <ButtonContainer>
          <Button
            color="secondary"
            onClick={onClickLogout}
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
          onClickEdit={onClickEdit}
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
  height: 32px;
  flex: unset;
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
