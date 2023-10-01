import { Button, NavbarItem, Tooltip } from "@nextui-org/react";

import { MdHelp } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ContactButton = () => {
  return (
    <NavbarItem className="hidden sm:flex">
      <Tooltip closeDelay={50} color="primary" content={"Ayuda / Contacto"}>
        <Button
          color="primary"
          variant="light"
          isIconOnly
          as={NavLink}
          to={"contact"}
        >
          <MdHelp className="text-2xl" />
        </Button>
      </Tooltip>
    </NavbarItem>
  );
};

export default ContactButton;
