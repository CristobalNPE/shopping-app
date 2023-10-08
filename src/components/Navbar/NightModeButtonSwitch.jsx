import { NavbarItem, Switch } from "@nextui-org/react";

import { MdNightlight, MdSunny } from "react-icons/md";

const NightModeButtonSwitch = ({ nightMode, switchNightMode }) => {
  return (
    <NavbarItem className="hidden sm:flex">
      <Switch
        isSelected={nightMode}
        onChange={switchNightMode}
        defaultSelected
        size="md"
        color="default"
        startContent={<MdSunny />}
        endContent={<MdNightlight />}
      />
    </NavbarItem>
  );
};

export default NightModeButtonSwitch;
