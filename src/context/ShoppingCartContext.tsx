import { createContext } from "react";

/*
 * Context and Provider are in separate files, otherwise
 * Hot Module Replacement (HMR) vite plugin will crash the app
 * on hot reloads since context gets default value for all useContext calls
 * Issue: https://github.com/vitejs/vite/issues/3301
 */

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
  isOpen: boolean;
  cartQuantity: number;
  cartItems: CartItem[];
};

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);
