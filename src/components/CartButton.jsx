import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import useShoppingCart from "../hooks/useShoppingCart";
import CartPopover from "./CartPopover";
import NavButton from "./NavButton";
import { Badge } from "@nextui-org/react";

const CartButton = ({ nightMode }) => {
  const { getTotalItemsInCart } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Badge
      color="danger"
      content={getTotalItemsInCart()}
      shape="circle"
      size="md"
      className={`${
        getTotalItemsInCart() === 0 ? "hidden" : "hidden sm:flex"
      } `}
    >
      <NavButton
        name={"Ver Carrito"}
        icon={<MdShoppingCart />}
        hasPopover
        nightMode={nightMode}
        popoverSetIsOpen={setIsOpen}
        popoverIsOpen={isOpen}
        popoverContent={<CartPopover setIsOpen={setIsOpen} />}
      />
    </Badge>
  );
};

export default CartButton;
