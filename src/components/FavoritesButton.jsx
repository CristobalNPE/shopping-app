import {
  Button,
  Link,
  NavbarItem,
  Tooltip
} from "@nextui-org/react";

import {
  MdFavorite
} from "react-icons/md";

const FavoritesButton = () => {
  return (
    <NavbarItem className="hidden sm:flex">
      <Tooltip delay={800} closeDelay={50} color="primary" content={"Favoritos"}>
        <Button color="primary" variant="light" isIconOnly as={Link}>
          <MdFavorite className="text-2xl" />
        </Button>
      </Tooltip>
    </NavbarItem>
  );
};

export default FavoritesButton;
