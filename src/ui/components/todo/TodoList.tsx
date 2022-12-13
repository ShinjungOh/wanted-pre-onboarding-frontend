import React, { memo } from 'react';
import styled from 'styled-components';

import { Todo } from '../../../lib/types/todo.interface';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  onToggleIsCompleted: (id: number) => void;
  onClickDelete: (id: number) => void;
  onClickEdit: (id: number, todo: string) => void;
}

const TodoList = ({
  todos,
  onToggleIsCompleted,
  onClickDelete,
  onClickEdit,
}: Props) => (
  <Container>
    {
      todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggleIsCompleted={onToggleIsCompleted}
          onClickDelete={onClickDelete}
          onClickEdit={onClickEdit}
        />
      ))
    }
  </Container>
);

export default memo(TodoList);

const Container = styled.div`
  flex: 1;
  padding: 20px 32px 48px 32px;
  overflow-y: auto;
`;
