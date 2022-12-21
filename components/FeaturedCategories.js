import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Account from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

import { orders } from '../utils/data';
import Orders from '../screens/Orders';
import CustomerLists from '../screens/CustomerLists';

const FeaturedCategories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="relative">
      <View>
        {orders.map((order, i) => (
          <View
            key={order + i}
            className="bg-white space-y-2 p-2 mb-3 w-[90%] mx-auto "
          >
            <View className="flex flex-row  justify-between items-center ">
              <Text className="font-bold capitalize">Order {order.order}</Text>
              <Text className="text-[#aca9a9]">{order.date}</Text>
            </View>
            <View className="flex flex-row justify-between  items-center">
              <View className="flex flex-row mt-1 ">
                <Image
                  className="rounded-md"
                  source={require('../assets/favicon.png')}
                />
                <View className="ml-2 flex items-start justify-start">
                  <Text className="text-[#aca9a9] text-xs font-semibold">
                    {order.quantity} ITEMS
                  </Text>
                  <Text className="text-blue-500 font-bold ">
                    {order.price}
                  </Text>
                </View>
              </View>
              <View
                className={`${
                  order.price != 'Paid' ? 'bg-red-200' : 'text-orange-200'
                } px-4 py-2 rounded-md`}
              >
                <Text
                  className={`${
                    order.price != 'Paid' ? 'text-red-500' : 'text-orange-500'
                  }`}
                >
                  {order.paid ? 'Paid' : 'Not Paid'}
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row items-center space-x-3">
                <View
                  className={`w-2 h-2 rounded-full ${
                    order.status === 'Pending'
                      ? 'bg-orange-500'
                      : order.status === 'Shipped'
                      ? 'bg-red-500'
                      : 'bg-green-500'
                  }`}
                ></View>
                <Text className="text-[#8d8b8b]">{order.status}</Text>
              </View>
              <TouchableOpacity className="flex flex-row items-center border-2 rounded p-1 border-gray-300 ">
                <Text className="text-gray-500"> Details</Text>
                <Icon name="right" size={15} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <TouchableOpacity className="absolute bottom-5 bg-blue-500 px-4 py-3 rounded-lg right-5 flex flex-row space-x-2 ">
          <Icon name="download" color={'white'} size={20} />
          <Text className="text-white">Report</Text>
        </TouchableOpacity>
      </View>

      <View className="fixed bottom-0 flex flex-row justify-between items-center px-4  left-0 right-0">
        <View className="flex items-center ">
          <Icon
            onPress={() => navigation.navigate('orders')}
            color={'#8d8b8b'}
            name="home"
            size={25}
          />
          <Text className="text-[#8d8b8b]">Home</Text>
        </View>
        <View className="relative flex items-center">
          <View className="w-4 h-4 rounded-full bg-red-500 absolute top-0 right-0">
            <Text className="text-center text-white">8</Text>
          </View>
          <Icon
            onPress={() => navigation.navigate('orders')}
            color={'blue'}
            name="shoppingcart"
            size={25}
          />
          <Text className="text-blue-500">Orders</Text>
        </View>
        <View className="flex items-center ">
          <Icon
            onPress={() => navigation.navigate('orderList')}
            color={'#8d8b8b'}
            name="CodeSandbox"
            size={25}
          />
          <Text className="text-[#8d8b8b]">Products</Text>
        </View>
        <View className="flex items-center ">
          <Icon
            onPress={() => navigation.navigate('payment')}
            color={'#8d8b8b'}
            name="inbox"
            size={25}
          />
          <Text className="text-[#8d8b8b]">Manage</Text>
        </View>
        <View className="flex items-center ">
          <Account
            onPress={() => navigation.navigate('customerLists')}
            color={'#8d8b8b'}
            name="account-outline"
            size={25}
          />
          <Text className="text-[#8d8b8b]">Account</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default FeaturedCategories;
