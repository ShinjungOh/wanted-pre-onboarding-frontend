import {
  requestDelete,
  requestGet,
  requestPost,
  requestPut,
} from './client';
import { getAccessToken } from '../utils/accessTokenStore';
import { Todo } from '../types/todo.interface';

const postTodo = async (todo: string) => {
  const url = '/todos';
  const data = {
    todo,
  };
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };

  const response = await requestPost({
    url,
    data,
    headers,
  });
  return response;
};

const getTodos = async () => {
  const url = '/todos';
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };

  const response = await requestGet({
    url,
    headers,
  });
  return response;
};

const putTodo = async (todoItem: Todo) => {
  const url = `/todos/${todoItem.id}`;
  const data = {
    todo: todoItem.todo,
    isCompleted: todoItem.isCompleted,
  };

  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };

  const response = await requestPut({
    url,
    data,
    headers,
  });
  return response;
};

const deleteTodo = async (id: number) => {
  const url = `/todos/${id}`;
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };

  const response = await requestDelete({
    url,
    headers,
  });
  return response;
};

export default {
  postTodo,
  getTodos,
  putTodo,
  deleteTodo,
};
