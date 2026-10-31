"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { RoleType, CartItem, Product, Cart } from "@/types";
import { demoRoleProfiles, demoProducts, DemoRoleProfile } from "@/data/demo";

interface DemoContextType {
  currentRole: RoleType;
  roleProfile: DemoRoleProfile;
  setRole: (role: RoleType) => void;
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  wishlist: string[]; // product IDs
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  demoNotification: string | null;
  showNotification: (msg: string) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

const INITIAL_CART_ITEMS: CartItem[] = [
  {
    productId: demoProducts[0].id,
    product: demoProducts[0],
    quantity: 1,
  },
  {
    productId: demoProducts[1].id,
    product: demoProducts[1],
    quantity: 2,
  },
];

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [currentRole, setCurrentRole] = useState<RoleType>("customer");
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [wishlist, setWishlist] = useState<string[]>([demoProducts[2].id, demoProducts[4].id]);
  const [demoNotification, setDemoNotification] = useState<string | null>(null);

  useEffect(() => {
    // Restore saved demo role from localStorage if available
    const saved = localStorage.getItem("vb_demo_role") as RoleType;
    if (saved && demoRoleProfiles[saved]) {
      setCurrentRole(saved);
    }
  }, []);

  const setRole = (role: RoleType) => {
    setCurrentRole(role);
    localStorage.setItem("vb_demo_role", role);
    showNotification(`Switched role to: ${demoRoleProfiles[role].title}`);
  };

  const showNotification = (msg: string) => {
    setDemoNotification(msg);
    setTimeout(() => {
      setDemoNotification((current) => (current === msg ? null : current));
    }, 4000);
  };

  // Cart logic
  const addToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.productId === product.id);
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { productId: product.id, product, quantity }];
    });
    showNotification(`Added "${product.title.slice(0, 28)}..." to cart.`);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
    showNotification("Item removed from cart.");
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.productId === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Wishlist logic
  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showNotification("Item removed from wishlist.");
        return prev.filter((id) => id !== productId);
      } else {
        showNotification("Item saved to mountain wishlist.");
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Calculate cart totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const estimatedShipping = cartItems.length > 0 ? 120 : 0;
  const total = subtotal + estimatedShipping;

  const cart: Cart = {
    items: cartItems,
    subtotal,
    estimatedShipping,
    total,
  };

  return (
    <DemoContext.Provider
      value={{
        currentRole,
        roleProfile: demoRoleProfiles[currentRole] || demoRoleProfiles.customer,
        setRole,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        wishlist,
        toggleWishlist,
        isInWishlist,
        demoNotification,
        showNotification,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
}

