import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from './config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  //   login user

  //   Try to use aaaaa as the state value for userToken for direct access
  const login = (phoneNo, password) => {
    axios
      .post(`${BASE_URL}/jwt-auth/v1/token`, {
        phoneNo,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        setUserToken(userInfo.data.token);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        AsyncStorage.setItem('userToken', userInfo.data.token);
      })
      .then((err) => console.log(err));
  };
  // logout user

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem('userInfo', userInfo);
    AsyncStorage.removeItem('userToken', userToken);
  };

  // Perform fetch
  const isLoggedIn = async () => {
    try {
      // we are fetching the data here
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }
      setUserToken(userToken);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
