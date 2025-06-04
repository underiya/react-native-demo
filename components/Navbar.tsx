// components/Navbar.tsx
import React from "react";
import { View, TextInput, TouchableOpacity, Platform } from "react-native";
import {
  Settings,
  Search,
  Bell,
  ShoppingCart,
  QrCode,
  Camera,
} from "lucide-react-native";
import { useRouter } from "expo-router";

export default function Navbar() {
  const router = useRouter();

  return (
    <View
      className={`p-4 bg-blue-100 pt-${
        Platform.OS === "ios" ? "12" : "6"
      } px-4 pb-2 bg-white shadow-md flex-row items-center justify-between`}
    >
      {/* Left icon */}
      <TouchableOpacity className="p-2 bg-white rounded-full">
        <QrCode
          size={24}
          color="#333"
          onPress={() => router.push("/cameraScreen")}
        />
      </TouchableOpacity>

      {/* Search bar */}
      <View className="flex-row items-center flex-1 h-10 px-2 mx-2 bg-white rounded-full">
        <Search size={18} color="#999" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          className="flex-1 ml-2 text-base text-black"
        />
        <TouchableOpacity className="p-2">
          <Camera size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Right icons */}
      <View className="flex-row space-x-2 bg-white rounded-full">
        <TouchableOpacity className="p-2">
          <ShoppingCart size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
