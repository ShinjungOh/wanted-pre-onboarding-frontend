import React from 'react';
import styled from 'styled-components';

const LogIn = () => (
  <Container>
    <Title>로그인</Title>
    <InputContainer>
      <Label htmlFor="email">ID</Label>
      <Input type="email" id="email" placeholder="이메일을 입력하세요." />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="password">비밀번호</Label>
      <Input type="password" id="password" placeholder="비밀번호를 입력하세요." />
    </InputContainer>
    <Button>로그인</Button>
  </Container>
);

export default LogIn;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  top: 10%;
`;

const Title = styled.h2`
  margin-bottom: 50px;
`;

const InputContainer = styled.div`
  width: 80%;
  height: 10%;
  //background-color: grey;
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
`;
