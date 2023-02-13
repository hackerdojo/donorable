import React from 'react';

export const PrincipalContext = React.createContext({
  user: null,
  updateUser: () => {}
});

