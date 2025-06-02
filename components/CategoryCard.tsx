import { View } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const CategoryCard = ({ category }) => {
  return (
    <TouchableOpacity className="flex-1 m-2 overflow-hidden rounded-lg">
      <Image source={category.image} className="object-cover w-full h-36" />
      <Text className="p-2 text-lg font-bold">{category.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
