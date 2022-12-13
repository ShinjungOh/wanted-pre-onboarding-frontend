import React, {
  ChangeEvent, useCallback, useMemo, useState,
} from 'react';
import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';

import getValidationUser from '../../lib/utils/getValidationUser';
import { User, UserValidation } from '../../lib/types/user.interface';
import authRest from '../../lib/api/authRest';
import { setAccessToken } from '../../lib/utils/accessTokenStore';

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const [userValidation, setUserValidation] = useState<UserValidation>({
    email: false,
    password: false,
    passwordCheck: false,
  });

  const isUserValidation = useMemo(
    () => !(userValidation.email && userValidation.password && userValidation.passwordCheck),
    [userValidation.email, userValidation.password, userValidation.passwordCheck],
  );

  const onChangeUser = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const regexpCheckList = ['email', 'password'];
    let test = false;
    if (regexpCheckList.includes(name)) {
      test = getValidationUser(name as 'email' | 'password', value);
    }

    if (name === 'passwordCheck') {
      test = user.password === value;
    }

    setUser({
      ...user,
      [name]: value,
    });

    setUserValidation({
      ...userValidation,
      [name]: test,
    });
  }, [user, userValidation]);

  const handleClickSignUp = async () => {
    try {
      const response = await authRest.postSignUp(user);
      alert('회원가입에 성공했습니다!');
      setAccessToken(response.data.access_token);
      navigate('/todo');
    } catch (e: any) {
      alert(e.response?.data?.message || '회원가입에 실패했습니다.');
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
      <Title>회원가입</Title>
      <InputContainer>
        <Label htmlFor="email">ID</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={user.email}
          placeholder="이메일을 입력하세요."
          onChange={onChangeUser}
          isError={user.email.length > 0 && !userValidation.email}
        />
        {
          user.email.length > 0 && !userValidation.email && (
            <ErrorMessage>이메일 형식이 올바르지 않습니다.</ErrorMessage>
          )
        }
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
          isError={user.password.length > 0 && !userValidation.password}
        />
        {
          user.password.length > 0 && !userValidation.password && (
            <ErrorMessage>8글자 이상 입력해 주세요.</ErrorMessage>
          )
        }
      </InputContainer>
      <InputContainer>
        <Label htmlFor="passwordCheck">비밀번호 확인</Label>
        <Input
          type="password"
          name="passwordCheck"
          id="passwordCheck"
          value={user.passwordCheck}
          placeholder="비밀번호를 확인해 주세요."
          onChange={onChangeUser}
          isError={user.passwordCheck.length > 0 && !userValidation.passwordCheck}
        />
        {
          user.passwordCheck.length > 0 && !userValidation.passwordCheck && (
            <ErrorMessage>비밀번호가 동일하지 않습니다.</ErrorMessage>
          )
        }
      </InputContainer>
      <Button
        onClick={handleClickSignUp}
        disabled={isUserValidation}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default SignUp;

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
  justify-content: flex-start;
  align-items: start;
  margin-bottom: 18px;
`;

const Label = styled.label`
  padding-left: 2px;
  margin-bottom: 2px;
`;

const Input = styled.input<{ isError?: boolean }>`
  width: 100%;
  height: 40px;
  padding-left: 8px;
  border-radius: 5px;
  border: 1px solid #505050;
  cursor: pointer;
  &:focus {
    outline: unset;
  }
  ${(props) => props.isError
          && css`
            border: 1px solid #ff5858;
            background-color: #facbcb;
          `}
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0 0 0;
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
