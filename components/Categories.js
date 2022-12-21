import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  let active = false;

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard active={true} text={'All time (22)'} />
      <CategoryCard text={'Today (12)'} />
      <CategoryCard text={'Yesterday (10)'} />
    </ScrollView>
  );
};

export default Categories;
