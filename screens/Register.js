import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../utils/AuthContext';
import { BaseButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

// Registering users does not work yet
const Register = () => {
  const { login } = useContext(AuthContext);
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
          <Text className="text-center uppercase text-white ">Register</Text>
        </TouchableOpacity>
        <View className="flex bg-gray-500 rounded-full p-2 flex-row justify-center my-2 space-x-2">
          <Icon
            onPress={() => navigation.navigate('login')}
            size={25}
            color="white"
            name="back"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
