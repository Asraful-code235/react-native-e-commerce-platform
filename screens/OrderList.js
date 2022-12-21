import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import { orders } from '../utils/data';

const OrderListScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View
        showsVerticalScrollIndicator={false}
        className="bg-white w-full h-full"
      >
        <View className="h-16 w-full bg-[#0170ba] flex  px-2 py-4">
          <View className="flex flex-row justify-between items-center">
            <TouchableOpacity onPress={() => navigation.navigate('payment')}>
              <Icon name="arrowleft" size={25} color="white" />
            </TouchableOpacity>
            <Text className="text-xl text-white font-semibold tracking-wider ">
              Order #128121
            </Text>
            <View>
              {/* <Icon name="questioncircleo" size={25} color="white" /> */}
            </View>
          </View>
          <View>
            {/* get local orders and map to get specific data */}
            <View className="divide-y  divide-slate-300 mt-6 space-y-2">
              {orders.map((data, i) => (
                <View key={data + i}>
                  <View className="flex flex-row justify-between items-center ">
                    <View className="flex space-x-2 text-start flex-row items-start justify-start ">
                      <Image source={require('../assets/favicon.png')} />
                      <View className="flex ">
                        <Text className="text-gray-500 capitalize ">
                          {data.order}
                        </Text>
                        <Text className="text-gray-500 capitalize ">
                          {data.quantity} Unit
                        </Text>
                        <Text className="text-gray-500 capitalize font-bold ">
                          {data.price}
                        </Text>
                      </View>
                    </View>
                    <Text className="text-slate-700 font-semibold">
                      {data.price}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            <View className="flex flex-row justify-between items-center border-t mt-4 border-t-gray-400">
              <Text className="capitalize ">Item Total</Text>
              <Text>₹42,036</Text>
            </View>
            <View className="flex flex-row justify-between items-center my-2 ">
              <Text className="capitalize ">Delivery</Text>
              <Text>₹24</Text>
            </View>
            <View className="flex flex-row border-b border-b-gray-400 justify-between items-center mt-2 ">
              <Text className="capitalize ">Grand Total</Text>
              <Text className="font-bold">₹42,060</Text>
            </View>
            <View className="mt-4">
              <View className="flex flex-row justify-between items-center">
                <Text className="uppercase text-gray-500 tracking-widest font-bold ">
                  customer details
                </Text>
                <Text className="text-blue-400 space-x-2">
                  <Icon size={15} name="sharealt" /> Share
                </Text>
              </View>
            </View>
            <View className="mt-4">
              <View className="flex flex-row justify-between items-center">
                <Text>Name</Text>
                <Text>Some Name</Text>
                <View></View>
              </View>
              <View className="flex my-2 flex-row justify-between items-center">
                <Text>Mobile</Text>
                <View className="flex flex-row justify-start mr-20 items-center">
                  <Text>+880165645</Text>
                  <View className="flex  flex-row justify-center ml-6 items-center">
                    <Icon size={20} color="blue" name="phone" />
                    <Icons size={20} color="green" name="whatsapp" />
                  </View>
                </View>
              </View>
              <View className="flex  flex-row  justify-between items-center">
                <Text>Address</Text>
                <Text>aldsjfakjdskasjdkjfkjkasdfadsfadslj</Text>
              </View>
              <View className="flex my-2 flex-row justify-between text-start items-center">
                <Text>Pin Code</Text>
                <Text>410035</Text>
                <View></View>
              </View>
              <View className="flex  flex-row justify-between text-start items-center">
                <Text>City</Text>
                <Text>Some name</Text>
                <View></View>
              </View>
              <View className="flex my-2 flex-row justify-between text-start items-center">
                <Text>Payment</Text>
                <Text>CAsh on Delivery</Text>
                <View>
                  <Text>...</Text>
                </View>
              </View>
              <View className="flex  mt-4 flex-row justify-around items-center">
                <TouchableOpacity className="border  rounded-md border-red-500 px-10 py-3">
                  <Text className="text-red-500 font-bold">Reject Order</Text>
                </TouchableOpacity>
                <TouchableOpacity className=" bg-green-500 px-10 py-3 rounded-md">
                  <Text className="text-white font-bold">Accept Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderListScreen;
