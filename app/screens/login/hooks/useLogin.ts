import { useState } from 'react';
import database from '@react-native-firebase/database';

const useLogin = (navigation: any) => {
  const onButtonPress = (screen: string) => {
    navigation.navigate(screen);
  };

  return { onButtonPress };
};

export default useLogin;
