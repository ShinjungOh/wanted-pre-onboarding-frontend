import React, {
  ChangeEvent, useCallback, useMemo, useState,
} from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';

import getValidationUser from '../../lib/utils/getValidationUser';
import { User, UserValidation } from '../../lib/types/user.interface';
import authRest from '../../lib/api/authRest';
import { setAccessToken } from '../../lib/utils/accessTokenStore';

const LogIn = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<Omit<User, 'passwordCheck'>>({
    email: '',
    password: '',
  });

  const [userValidation, setUserValidation] = useState<Omit<UserValidation, 'passwordCheck'>>({
    email: false,
    password: false,
  });

  const isUserValidation = useMemo(() => !(userValidation.email && userValidation.password), [userValidation.email, userValidation.password]);

  const onChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const regexp = getValidationUser(name as 'email' | 'password', value);

    setUser({
      ...user,
      [name]: value,
    });

    setUserValidation({
      ...userValidation,
      [name]: regexp,
    });
  };

  const handleClickLogIn = async () => {
    try {
      const response = await authRest.postSignIn(user);
      alert('로그인에 성공했습니다!');
      setAccessToken(response.data.access_token);
      navigate('/todo');
    } catch (e: any) {
      alert(e.response?.data?.message || '로그인에 실패했습니다.');
    }
  };

  const onClickBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <Container>
      <Header>
        <ButtonBox onClick={onClickBack}>
          <FaLessThan />
        </ButtonBox>
      </Header>
      <Title>로그인</Title>
      <InputContainer>
        <Label htmlFor="email">ID</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={user.email}
          placeholder="이메일을 입력하세요."
          onChange={onChangeUser}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={user.password}
          placeholder="비밀번호를 입력하세요."
          onChange={onChangeUser}
        />
      </InputContainer>
      <Button
        onClick={handleClickLogIn}
        disabled={isUserValidation}
      >
        로그인
      </Button>
    </Container>
  );
};

export default LogIn;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  padding: 15px 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  font-size: 20px;
`;

const ButtonBox = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-bottom: 50px;
`;

const InputContainer = styled.div`
  width: 80%;
  height: 82px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 18px;
`;

const Label = styled.label`
  padding-left: 2px;
  margin-bottom: 2px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 8px;
  border-radius: 5px;
  border: 1px solid #505050;
  cursor: pointer;
`;

const Button = styled.button`
  width: 80%;
  height: 8%;
  margin-top: 15px;
  border-radius: 32px;
  border: none;
  background-color: #3a68f9;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #d7d7d7;
  }
`;
