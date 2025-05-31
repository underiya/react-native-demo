import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, ShoppingCart } from "lucide-react-native";

import CartItem from "@/components/CartItem";
import { useCart } from "@/context/CartContext";

export default function CartScreen() {
  const router = useRouter();
  const { items, updateQuantity, removeFromCart, getTotal, getItemCount } =
    useCart();

  const shipping = items.length > 0 ? 15 : 0;
  const subtotal = getTotal();
  const total = subtotal + shipping;

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Header */}
      <View
        className="flex-row items-center px-4 pt-2 pb-3 bg-white "
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
        }}
      >
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <ArrowLeft size={24} color="#212529" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">Cart</Text>
      </View>

      {items.length === 0 ? (
        <View className="items-center justify-center flex-1 p-4">
          <ShoppingCart size={64} color="#ADB5BD" />
          <Text className="mt-4 text-xl font-bold text-center">
            Your cart is empty
          </Text>
          <Text className="mt-2 text-base text-center text-gray-500">
            Looks like you haven&lsquo;t added any products to your cart yet.
          </Text>
          <TouchableOpacity
            className="px-6 py-3 mt-6 rounded-lg bg-primary"
            onPress={() => router.push("/")}
          >
            <Text className="font-medium text-white">Start Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ padding: 16 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Cart Items */}
            {items.map((item, index) => (
              <CartItem
                key={`${item.product.id}-${index}`}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}

            {/* Promo Code */}
            <View
              className="p-4 mb-3 bg-white rounded-xl"
              style={{ elevation: 1 }}
            >
              <Text className="mb-2 font-semibold">Enter Promo Code</Text>
              <View className="flex-row items-center">
                <View className="flex-1 px-3 py-2 mr-2 border border-gray-300 rounded-lg">
                  <Text className="text-gray-400">Enter code</Text>
                </View>
                <TouchableOpacity className="px-4 py-2 rounded-lg bg-primary">
                  <Text className="font-medium text-white">Apply</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Order Summary */}
            <View
              className="p-4 bg-white  rounded-xl"
              style={{ elevation: 1 }}
            >
              <Text className="mb-3 text-lg font-bold">Order Summary</Text>

              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">
                  Subtotal ({getItemCount()} items)
                </Text>
                <Text className="font-medium">${subtotal.toFixed(2)}</Text>
              </View>

              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Shipping & Tax</Text>
                <Text className="font-medium">${shipping.toFixed(2)}</Text>
              </View>

              <View className="my-2 border-t border-gray-200" />

              <View className="flex-row justify-between mb-2">
                <Text className="font-bold">Total</Text>
                <Text className="font-bold text-primary">
                  ${total.toFixed(2)}
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* Checkout Button */}
          <View className="p-4 bg-white ">
            <TouchableOpacity className="items-center py-3 rounded-lg bg-primary">
              <Text className="text-lg font-bold text-white">Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
