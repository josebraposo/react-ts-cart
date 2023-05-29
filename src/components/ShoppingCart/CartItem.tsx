import { Button, Stack } from "react-bootstrap";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import storeItems from "../../data/items.json";
import { useContext } from "react";
import { formatCurrency } from "../../utilities/formatCurrency";
import { TrashSvg } from "../../assets/TrashSvg";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useContext(ShoppingCartContext);
  const item = storeItems.find((item) => item.id === id);

  if (!item) {
    return null;
  }

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt={item.name}
      />
      <div className="me-auto">
        {item.name}{" "}
        {quantity > 1 && (
          <span className="text-muted" style={{ fontSize: ".65rem" }}>
            x{quantity}
          </span>
        )}
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        <TrashSvg />
      </Button>
    </Stack>
  );
}
