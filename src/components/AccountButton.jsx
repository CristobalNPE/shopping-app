import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import AccountPopover from "./AccountPopover";
import NavButton from "./NavButton";

const AccountButton = ({ nightMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavButton
      name={"Mi Cuenta"}
      icon={<MdAccountCircle />}
      hasPopover
      nightMode={nightMode}
      popoverSetIsOpen={setIsOpen}
      popoverIsOpen={isOpen}
      popoverContent={<AccountPopover setIsOpen={setIsOpen} />}
    />
  );
};

export default AccountButton;
