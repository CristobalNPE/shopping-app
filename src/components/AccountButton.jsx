import {
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip
} from "@nextui-org/react";

import {
  MdAccountCircle
} from "react-icons/md";
import AccountPopover from "./AccountPopover";


const AccountButton = () => {
  return (
    <Tooltip delay={800} closeDelay={50} color="primary" content={"Mi Cuenta"}>
      <NavbarItem className="hidden sm:flex">
        <Popover backdrop="blur" placement="bottom">
          <PopoverTrigger>
            <Button color="primary" variant="light" isIconOnly>
              <MdAccountCircle className="text-2xl" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <AccountPopover />
          </PopoverContent>
        </Popover>
      </NavbarItem>
    </Tooltip>
  );
};

export default AccountButton;
