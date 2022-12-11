import React from 'react';
import { Routes, Route } from 'react-router';

import GlobalStyles from './ui/core/GlobalStyles';
import Home from './ui/pages/Home';
import LogIn from './ui/pages/LogIn';
import SignUp from './ui/pages/SignUp';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    <GlobalStyles />
  </>
);

export default App;
