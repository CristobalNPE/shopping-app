import {
  Badge,
  Button,
  Link,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@nextui-org/react";

import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import useShoppingCart from "../hooks/useShoppingCart";
import CartPopover from "./CartPopover";

const CartButton = ({ nightMode }) => {
  const { getTotalItemsInCart } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const [ttIsOpen, setTtisOpen] = useState(false);
  return (
    <Tooltip
      isOpen={ttIsOpen}
      onOpenChange={(open) => setTtisOpen(open)}
      delay={0}
      closeDelay={50}
      color="primary"
      content={"Ver carrito"}
    >
      <NavbarItem className="hidden sm:flex">
        <Popover
          shouldBlockScroll
          backdrop="opaque"
          placement="bottom-end"
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <PopoverTrigger>
            <Button
              color="primary"
              variant="light"
              isIconOnly
              as={Link}
              onClick={() => setTtisOpen(!ttIsOpen)}
            >
              <Badge
                color="danger"
                content={getTotalItemsInCart()}
                shape="circle"
                size="lg"
                className={`${getTotalItemsInCart() === 0 && "hidden"}`}
              >
                <MdShoppingCart className="text-2xl" />
              </Badge>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className={`${
              nightMode
                ? "bg-[#1c1d1c] text-[#ECEDEE]"
                : "bg-[#FFFFFF] text-[#1c1d1c]"
            }`}
          >
            <CartPopover setIsOpen={setIsOpen} />
          </PopoverContent>
        </Popover>
      </NavbarItem>
    </Tooltip>
  );
};

export default CartButton;

//Button name (tooltip content)
//hasPopover? if it has render
//icon
