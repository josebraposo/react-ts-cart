import { Offcanvas, Stack } from "react-bootstrap";
import {
  CartItem as CartItemType,
  ShoppingCartContext,
} from "../../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { useContext } from "react";
import { formatCurrency } from "../../utilities/formatCurrency";
import storeItems from "../../data/items.json";

function getTotalPrice(cartItems: CartItemType[]): number {
  return cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((jsonItem) => jsonItem.id === cartItem.id);
    return (total = total + (item?.price || 0) * cartItem.quantity);
  }, 0);
}

export function ShoppingCart() {
  const { closeCart, isOpen, cartItems } = useContext(ShoppingCartContext);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
        <p className="text-end fw-bold fs-5">
          Total: {formatCurrency(getTotalPrice(cartItems))}
        </p>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
