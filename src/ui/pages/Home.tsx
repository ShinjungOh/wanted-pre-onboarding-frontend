import React from 'react';
import styled from 'styled-components';

const Home = () => (
  <Container>
    <Title>투두 리스트</Title>
    <Button>로그인</Button>
    <Button>회원가입</Button>
  </Container>
);

export default Home;

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
  margin-top: 90px;
  margin-bottom: 50px;
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
