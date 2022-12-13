export interface User {
  email: string;
  password: string;
  passwordCheck: string;
}

export interface UserValidation {
  email: boolean;
  password: boolean;
  passwordCheck: boolean;
}
