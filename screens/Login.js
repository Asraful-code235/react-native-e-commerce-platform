import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../utils/AuthContext';
import { BaseButton } from 'react-native-gesture-handler';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className="w-full h-screen flex justify-center items-center">
        <View>
          <View className="w-screen mb-2">
            <TextInput
              className="w-[80%] mx-auto border rounded-md border-gray-500 px-2 py-1  "
              placeholder="Phone number"
              defaultValue="+880"
            />
          </View>
          <View className="w-screen mb-4">
            <TextInput
              className="w-[80%] mx-auto border rounded-md border-gray-500 px-2 py-1  "
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity className="w-[80%]  mx-auto px-2 py-3 bg-[#0170ba] rounded-md ">
          <Text
            onPress={() => login()}
            className="text-center uppercase text-white "
          >
            Log in
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row justify-center my-2 space-x-2">
          <Text className="text-gray-500">Dont Have a account ?</Text>
          <Text
            onPress={() => navigation.navigate('register')}
            className="font-bold text-gray-600 underline"
          >
            Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
