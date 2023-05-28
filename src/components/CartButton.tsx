import { Button } from "react-bootstrap";
import { CartSvg } from "../assets/CartSvg";

type CartButtonProps = {
  openCart: () => void;
  cartQuantity: number;
};

export function CartButton({ openCart, cartQuantity }: CartButtonProps) {
  return (
    <Button
      onClick={openCart}
      style={{
        width: "3rem",
        height: "3rem",
        position: "relative",
      }}
      variant="outline-primary"
      className="rounded-circle"
    >
      <CartSvg />
      <div
        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
        style={{
          color: "white",
          width: "1.5rem",
          height: "1.5rem",
          position: "absolute",
          bottom: 0,
          right: 0,
          transform: "translate(25%, 25%)",
        }}
      >
        {cartQuantity}
      </div>
    </Button>
  );
}
