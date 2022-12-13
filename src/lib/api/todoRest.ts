import { requestGet, requestPost } from './client';
import { getAccessToken } from '../utils/accessTokenStore';

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

export default {
  postTodo,
  getTodos,
};
