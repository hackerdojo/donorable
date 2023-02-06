import React, {useContext} from 'react';
import {View, Text} from 'react-native';

export const PrincipalContext = React.createContext({
  user: null,
  updateUser: () => {}
});

