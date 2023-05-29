import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { getBaseUrl } from "../../utilities/getBaseUrl";
import { CartButton } from "./CartButton";

function buildLinkProps(path: string, route: string) {
  return {
    href: `${getBaseUrl()}${route}`,
    ...(path === route && {
      style: {
        textDecoration: "underline",
        fontWeight: "bold",
      },
    }),
  };
}

export function Navbar() {
  const { openCart, cartQuantity } = useContext(ShoppingCartContext);
  const path = useLocation()?.pathname;
  return (
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link {...buildLinkProps(path, "/")}>Store</Nav.Link>
          <Nav.Link {...buildLinkProps(path, "/about")}>About</Nav.Link>
        </Nav>
        <CartButton openCart={openCart} cartQuantity={cartQuantity} />
      </Container>
    </NavbarBs>
  );
}
