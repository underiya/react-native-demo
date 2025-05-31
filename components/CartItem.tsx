import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { CartItem as CartItemType } from "@/types/types";
import { Minus, Plus, Trash2 } from "lucide-react-native";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  const { product, quantity, color, storage } = item;

  // Calculate the price based on storage if available
  let itemPrice = product.price;
  if (storage && product.storage) {
    const selectedStorage = product.storage.find((s) => s.size === storage);
    if (selectedStorage) {
      itemPrice = selectedStorage.price;
    }
  }

  return (
    <View
      className="flex-row p-4 mb-3 bg-white shadow-sm rounded-xl"
      style={{ elevation: 1 }}
    >
      <Image
        source={{ uri: product.image }}
        className="w-20 h-20 mr-3 rounded-lg"
        resizeMode="cover"
      />

      <View className="justify-between flex-1">
        <View>
          <Text className="text-base font-semibold">{product.name}</Text>
          <Text className="mb-1 text-xs text-gray-500">{product.brand}</Text>

          <View className="flex-row">
            {color && (
              <Text className="mr-2 text-xs text-gray-600">
                Color: <Text className="font-medium">{color}</Text>
              </Text>
            )}

            {storage && (
              <Text className="text-xs text-gray-600">
                Storage: <Text className="font-medium">{storage}</Text>
              </Text>
            )}
          </View>
        </View>

        <View className="flex-row items-center justify-between mt-2">
          <Text className="text-base font-bold text-primary">
            ${itemPrice.toFixed(2)}
          </Text>

          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => onUpdateQuantity(product.id, quantity - 1)}
              className="items-center justify-center bg-gray-100 rounded-full w-7 h-7"
            >
              <Minus size={16} color="#6C757D" />
            </TouchableOpacity>

            <Text className="mx-3 font-medium">{quantity}</Text>

            <TouchableOpacity
              onPress={() => onUpdateQuantity(product.id, quantity + 1)}
              className="items-center justify-center bg-gray-100 rounded-full w-7 h-7"
            >
              <Plus size={16} color="#6C757D" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => onRemove(product.id)}
        className="absolute top-2 right-2"
      >
        <Trash2 size={16} color="#FF6347" />
      </TouchableOpacity>
    </View>
  );
}
