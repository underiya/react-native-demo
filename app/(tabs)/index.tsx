import CameraScreen from "@/app/cameraScreen";
import CardCarousel from "@/components/CardCarousel";
import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true}>
        {/* <Image
        source={{ uri: "./img1.jpg" }}
        className="w-full h-full mb-4 rounded-lg"
        /> */}
        <Navbar />
        <CardCarousel />
        {/* <CameraScreen /> */}
        {/* <Categories /> */}
        {/* <Text className="mt-2 text-2xl font-bold text-white">Categories</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreen;
