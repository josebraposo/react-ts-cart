import { Button } from "react-bootstrap";
import { CartSvg } from "../../assets/CartSvg";
import { useEffect, useState } from "react";
import { useFirstRender } from "../../hooks/useFirstRender";

type CartButtonProps = {
  openCart: () => void;
  cartQuantity: number;
};

export function CartButton({ openCart, cartQuantity }: CartButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const firstRender = useFirstRender();

  useEffect(() => {
    if (!firstRender) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 150);
    }
  }, [firstRender, cartQuantity]);

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
          transition: "transform 0.25s ease-in-out",
          transform: isAnimating ? "scale(1.5)" : "scale(1)",
        }}
      >
        {cartQuantity}
      </div>
    </Button>
  );
}
