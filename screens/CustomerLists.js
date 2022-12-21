import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { data } from '../utils/data';

const CustomerLists = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [filter, setFilter] = useState('');

  const handleSearchFilter = (text) => {
    setFilter(text);
  };
  // search state
  const filteredData = data.filter((i) =>
    i.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="h-28 w-full bg-[#0170ba] flex  px-2 py-4">
        <View className="flex flex-row justify-between">
          <TouchableOpacity onPress={() => navigation.navigate('orders')}>
            <Icon name="arrowleft" size={25} color="white" />
          </TouchableOpacity>
          <Text className="text-xl text-white font-semibold tracking-wider ">
            My Customers
          </Text>
          <View></View>
        </View>
        <View
          className="bg-
        white mt-2 rounded-md w-full"
        >
          <TextInput
            value={filter}
            onChangeText={handleSearchFilter}
            placeholder="Search by customer name"
            className=" py-2 ml-2   rounded-md bg-white placeholder: placeholder:text-gray-400"
          />
        </View>
      </View>
      <View className="w-full h-screen bg-gray-100">
        <View className="flex flex-col gap-y-[0.2] justify-start items-center w-full mt-8 ">
          {filteredData &&
            filteredData.map((items, i) => (
              <View
                key={i + items}
                className="flex  p-3 items-center justify-start   flex-row  mb-4 shadow-md bg-white rounded-md  w-[80%] mx-auto "
              >
                <View className="bg-gray-200 flex flex-[0.15] p-4 rounded-sm mr-2 ">
                  <Text className="uppercase font-extrabold text-[18px]">
                    {items.acr}
                  </Text>
                </View>
                <View className="flex flex-1 items-start justify-start text-start">
                  <Text className="font-semibold text-base ">{items.name}</Text>
                  <Text className="text-gray-400 ">{items.orders}</Text>
                </View>
              </View>
            ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomerLists;
