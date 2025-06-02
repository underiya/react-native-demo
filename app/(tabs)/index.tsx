import CardCarousel from "@/components/CardCarousel";
import Categories from "@/components/Categories";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  return (
    <View>
      {/* <Image
        source={{ uri: "./img1.jpg" }}
        className="w-full h-full mb-4 rounded-lg"
      /> */}
      <CardCarousel />
      <Categories />
      {/* <Text className="mt-2 text-2xl font-bold text-white">Categories</Text> */}
    </View>
  );
}
export default HomeScreen;
