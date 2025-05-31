import { View, Image, Text, TouchableOpacity, Pressable } from "react-native";

type CardProps = {
  image: string;
  title: string;
  description: string;
  onPress?: () => void;
};

const Card: React.FC<CardProps> = ({ image, title, description, onPress }) => {
  console.log(image);
  return (
    <View className="h-full p-4 mb-4 bg-white rounded-lg shadow-md">
      <Image
        source={{ uri: image }}
        className="w-full h-full mb-4 rounded-lg"
        resizeMode="cover"
      />
      {/* <img src={image} alt="" /> */}
      <Text className="mb-2 text-lg font-bold">{title}</Text>
      <Text className="mb-4 text-gray-600 ">{description}</Text>
      <TouchableOpacity
        style={{ backgroundColor: "#3498db" }}
        className="px-4 py-2 bg-blue-500 rounded "
        onPress={onPress}
      >
        <Text className="text-lg text-center bg-blue-500 ">Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
