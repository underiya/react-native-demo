import { CartItem, Product } from "@/types/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity: number,
    color: string,
    storage?: string
  ) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (
    product: Product,
    quantity: number,
    color: string,
    storage?: string
  ) => {
    const existingItemIndex = items.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.color === color &&
        item.storage === storage
    );

    if (existingItemIndex > -1) {
      // Update existing item
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += quantity;
      setItems(updatedItems);
    } else {
      // Add new item
      setItems([...items, { product, quantity, color, storage }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setItems(items.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems(
      items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((total, item) => {
      // Calculate price based on storage if applicable
      let itemPrice = item.product.price;
      if (item.storage && item.product.storage) {
        const selectedStorage = item.product.storage.find(
          (s) => s.size === item.storage
        );
        if (selectedStorage) {
          itemPrice = selectedStorage.price;
        }
      }
      return total + itemPrice * item.quantity;
    }, 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
