import {
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const NavButton = ({
  name,
  icon,
  hasPopover = false,
  popoverContent,
  popoverIsOpen,
  popoverSetIsOpen,
  toLink,
  nightMode,
}) => {
  if (!hasPopover) {
    return (
      <Tooltip closeDelay={50} color="primary" content={name}>
        <NavbarItem className="hidden sm:flex">
          <Button
            color="primary"
            variant="light"
            isIconOnly
            as={NavLink}
            to={toLink}
          >
            <span className="text-2xl">{icon}</span>
          </Button>
        </NavbarItem>
      </Tooltip>
    );
  }

  return (
    <Tooltip closeDelay={50} color="primary" content={name}>
      <NavbarItem className="hidden sm:flex">
        <Popover
          shouldBlockScroll
          backdrop="opaque"
          placeholder="bottom-end"
          isOpen={popoverIsOpen}
          onOpenChange={(open) => popoverSetIsOpen(open)}
        >
          <PopoverTrigger>
            <Button color="primary" variant="light" isIconOnly>
              <span className="text-2xl">{icon}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className={`${
              nightMode
                ? "bg-[#1c1d1c] text-[#ECEDEE]"
                : "bg-[#FFFFFF] text-[#1c1d1c]"
            }`}
          >
            {popoverContent}
          </PopoverContent>
        </Popover>
      </NavbarItem>
    </Tooltip>
  );
};

export default NavButton;
