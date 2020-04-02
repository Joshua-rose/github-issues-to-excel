/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

const AppContext = React.createContext({
  setAppError: (error: any) => { },
  setToken: (tokenString: string) => { },
  token: '',
  setLogin: (loginString: string) => { },
});

export default AppContext;
