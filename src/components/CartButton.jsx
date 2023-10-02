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

import { MdShoppingCart } from "react-icons/md";
import CartPopover from "./CartPopover";
import { useContext } from "react";
import { ShoppingContext } from "../App";

const CartButton = ({ nightMode }) => {
  const { getTotalItemsInCart } = useContext(ShoppingContext);

  return (
    <Tooltip delay={800} closeDelay={50} color="primary" content={"Ver carrito"}>
      <NavbarItem className="hidden sm:flex">
        <Popover shouldBlockScroll backdrop="opaque" placement="bottom-end">
          <PopoverTrigger>
            <Button color="primary" variant="light" isIconOnly as={Link}>
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
            <CartPopover />
          </PopoverContent>
        </Popover>
      </NavbarItem>
    </Tooltip>
  );
};

export default CartButton;
