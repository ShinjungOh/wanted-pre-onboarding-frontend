import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';

const LogIn = () => {
  const navigate = useNavigate();

  const handleClickLogIn = () => {
    navigate('/todo');
  };

  const onClickBack = () => {
    navigate(-1);
  };

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
        <Input type="email" id="email" placeholder="이메일을 입력하세요." />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" placeholder="비밀번호를 입력하세요." />
      </InputContainer>
      <Button onClick={handleClickLogIn}>로그인</Button>
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
  height: 10%;
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
  height: 100%;
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
`;
