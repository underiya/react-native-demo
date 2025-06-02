import React from "react";
import { FlatList, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: require("@public/logo.png"),
    },
    { id: 2, name: "Fashion", image: require("@public/mobile.jpg") },
    {
      id: 3,
      name: "Home & Kitchen",
      image: require("@public/mobile.jpg"),
    },
    {
      id: 4,
      name: "Sports & Fitness",
      image: require("@public/mobile.jpg"),
    },
    {
      id: 5,
      name: "Toys & Games",
      image: require("@public/mobile.jpg"),
    },
  ];
  return (
    <View className="p-5">
      <Text className="mb-2 text-2xl font-bold">Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard category={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

export default Categories;
