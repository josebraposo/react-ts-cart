import { createContext } from "react";

export type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  isOpen: boolean,
  cartQuantity: number;
  cartItems: CartItem[];
};

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);


