import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Categories from '../components/Categories';
import FeaturedCategories from '../components/FeaturedCategories';
import { AuthContext } from '../utils/AuthContext';

const Orders = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* header */}
      <View className="flex p-5 bg-[#0170ba] h-auto  ">
        <View className="flex flex-row justify-between ">
          <View></View>
          <Text className="text-white font-bold text-lg capitalize">
            All orders (102)
          </Text>
          <TouchableOpacity>
            {/* pressing this button will logout the user */}
            <Icon
              onPress={() => logout()}
              color={'white'}
              name="bars"
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View
          className="bg-
        white mt-2 rounded-md w-full"
        >
          <TextInput
            // value={filter}
            // onChangeText={handleSearchFilter}
            placeholder="Search by customer name"
            className=" py-2 ml-2  rounded-md bg-white  placeholder:text-gray-400"
          />
        </View>
      </View>

      {/* body*/}

      <ScrollView
        className="bg-[#f6f6f6] "
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Select Categories */}
        <Categories />
        {/* Featured Categories */}
        <FeaturedCategories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;
