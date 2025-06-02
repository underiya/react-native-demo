import { View, Image, Text, TouchableOpacity } from "react-native";

type CardProps = {
  image: any;
  title: string;
  description: string;
  onPress?: () => void;
};

const Card: React.FC<CardProps> = ({ image, title, description, onPress }) => {
  return (
    <View className="h-full p-4 mb-4 bg-white rounded-lg shadow-md">
      <Image
        source={image}
        className="w-full h-full mb-4 rounded-lg"
        resizeMode="cover"
      />

      <View className="absolute px-2 py-2 backdrop-blur-md">
        <Text className="mb-2 text-lg font-bold">{title}</Text>
        <Text className="mb-4 text-gray-600 ">{description}</Text>
        <TouchableOpacity
          className="px-4 py-2 bg-white rounded-lg w-fit "
          onPress={onPress}
        >
          <Text className="font-semibold text-center capitalize text-md">
            Shop now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
