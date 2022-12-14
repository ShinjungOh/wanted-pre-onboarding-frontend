import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router';

import { Page } from './ui/components/layout';
import GlobalStyles from './ui/core/GlobalStyles';
import Home from './ui/pages/Home';
import LogIn from './ui/pages/LogIn';
import SignUp from './ui/pages/SignUp';
import Todo from './ui/pages/Todo';

const App = () => (
  <>
    <Page>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Page>
    <GlobalStyles />
  </>
);

export default App;
