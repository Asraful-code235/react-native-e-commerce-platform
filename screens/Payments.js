import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import Categories from '../components/Categories';

import { orders } from '../utils/data';

const Payments = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="">
      {/* header */}
      <View className="h-16 w-full bg-[#0170ba] flex  px-2 py-4">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.navigate('orders')}>
            <Icon name="arrowleft" size={25} color="white" />
          </TouchableOpacity>
          <Text className="text-xl text-white font-semibold tracking-wider ">
            Payments
          </Text>
          <View>
            <Icon name="questioncircleo" size={25} color="white" />
          </View>
        </View>
      </View>
      {/* body */}
      <View className="divide-y divide-slate-200 ">
        <View className="flex  px-2 flex-row justify-between items-center my-4 ">
          <Text className="text-lg capitalize">Default method</Text>
          <Text className="text-xs text-[#a5a5a5]  ">
            BothOptions
            <Icon name="right" size={15} />
          </Text>
        </View>
        <View className="flex   px-2 flex-row justify-between items-center ">
          <Text className="text-lg capitalize">Payment Profile</Text>
          <Text className="text-xs text-[#a5a5a5]  ">
            Basic Account
            <Icon name="right" size={15} />
          </Text>
        </View>
      </View>
      <View className="mt-4 px-2">
        <View className="flex flex-row justify-between items-center ">
          <Text className="text-lg font-bold">Payment Overview</Text>
          <Text className="text-xs text-[#868686]">
            Lifetime
            <Icon name="down" />
          </Text>
        </View>
      </View>
      <View className="flex px-2 mt-4 flex-row justify-between items-center">
        <View className="px-8 py-6 space-y-2 bg-orange-600 rounded-md  ">
          <Text className="uppercase text-white">Amount on hold</Text>
          <Text className="text-white text-xl">₹701</Text>
        </View>
        <View className="px-8 py-6 space-y-2 bg-green-600 rounded-md  ">
          <Text className="uppercase text-white">Amount Received</Text>
          <Text className="text-white text-xl">₹2,319</Text>
        </View>
      </View>
      <View>
        <Text className="px-2 text-lg mt-6 font-bold">Transactions</Text>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 5,
            paddingTop: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {[
            { name: 'on hold(12)', active: false },
            { name: 'Payments(12)', active: true },
            { name: 'Redunds(13)', active: false },
          ].map((data, i) => (
            <View key={i + data.name}>
              <TouchableOpacity>
                <View
                  className={` m-3  py-2 px-3 rounded-2xl ${
                    data.active ? 'bg-[#0170ba]' : 'bg-[#e7e7e7]'
                  }`}
                >
                  <Text
                    className={`text-sm ${
                      data.active ? 'text-white' : 'text-[#a2a2a2]'
                    } font-bold tracking-wider capitalize`}
                  >
                    {data.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <ScrollView>
          {orders.map((order, i) => (
            <View
              key={order + i}
              className="bg-white space-y-2 p-2 mb-3 w-[90%] mx-auto "
            >
              <View className="flex flex-row justify-between  items-center">
                <View className="flex flex-row mt-1 ">
                  <Image
                    className="rounded-md"
                    source={require('../assets/favicon.png')}
                  />
                  <View className="ml-2 flex items-start justify-start">
                    <Text className=" text-base  font-semibold">
                      {order.order}
                    </Text>
                    <Text className="text-blue-500 font-bold ">
                      {order.date}
                    </Text>
                  </View>
                </View>
                <View className="flex items-end">
                  <Text className="text-blue-400 font-bold">₹358</Text>
                  <View className="flex flex-row items-center space-x-2">
                    <View className="w-3 h-3 rounded-full bg-green-400"></View>
                    <Text className="tracking-wider">Received</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Payments;
