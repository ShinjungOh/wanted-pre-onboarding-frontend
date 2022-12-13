import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getHasAccessToken } from '../../lib/utils/accessTokenStore';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getHasAccessToken()) {
      navigate('/');
    }
  }, []);

  return (
    <>todopage</>
  );
};

export default Todo;
