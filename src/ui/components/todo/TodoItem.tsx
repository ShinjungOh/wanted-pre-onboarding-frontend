import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import {
  MdDelete, MdDone,
} from 'react-icons/md';

import { Todo } from '../../../lib/types/todo.interface';

interface Props {
  onToggleIsCompleted: (id: number) => void;
  onClickDelete: (id: number) => void;
}

const TodoItem = ({
  id,
  todo,
  isCompleted,
  onToggleIsCompleted,
  onClickDelete,
}: Props & Todo) => (
  <Container>
    <CheckCircle
        done={isCompleted}
        onClick={() => { onToggleIsCompleted(id); }}
    >
      {isCompleted && <MdDone />}
    </CheckCircle>
    <Text done={isCompleted}>{todo}</Text>
    <Action onClick={() => { onClickDelete(id); }}>
      <MdDelete />
    </Action>
  </Container>
);

export default memo(TodoItem);

const Action = styled.div`
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  margin-left: 12px;
  cursor: pointer;
  &:hover {
    color: #2478ff;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) => props.done
  && css`
      border: 1px solid #2478ff;
      color: #2478ff;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(props) => props.done
  && css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;
