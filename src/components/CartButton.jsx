import {
  Badge,
  Button,
  Link,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip
} from "@nextui-org/react";

import {
  MdShoppingCart
} from "react-icons/md";
import CartPopover from "./CartPopover";


const CartButton = ({nightMode}) => {
  return (
    <Badge color="danger" content={11} shape="circle" size="lg">
      <Tooltip color="primary" content={"Ver carrito"}>
        <NavbarItem className="hidden sm:flex">
          <Popover shouldBlockScroll backdrop="opaque" placement="bottom-end">
            <PopoverTrigger>
              <Button color="primary" variant="light" isIconOnly as={Link}>
                <MdShoppingCart className="text-2xl" />
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
    </Badge>
  );
};

export default CartButton;
