import { User } from '../types/user.interface';
import { requestPost } from './client';

const postSignUp = async (user: User) => {
  const url = '/auth/signup';
  const data = {
    email: user.email,
    password: user.password,
  };

  const response = await requestPost({
    url,
    data,
  });
  return response;
};

const postSignIn = async (user: Omit<User, 'passwordCheck'>) => {
  const url = '/auth/signin';
  const data = {
    email: user.email,
    password: user.password,
  };

  const response = await requestPost({
    url,
    data,
  });
  return response;
};

export default {
  postSignUp,
  postSignIn,
};
