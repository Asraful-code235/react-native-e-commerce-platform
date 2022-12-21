import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryCard = ({ text, active }) => {
  return (
    <TouchableOpacity>
      <View
        className={` m-3  py-2 px-3 rounded-xl ${
          active ? 'bg-[#0170ba]' : 'bg-[#e7e7e7]'
        }`}
      >
        <Text
          className={`text-sm ${
            active ? 'text-white' : 'text-[#a2a2a2]'
          } font-bold tracking-wider`}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
