import { Button, Input, Link, Tooltip, Switch, Image } from "@nextui-org/react";

import logo from "../assets/Logo.svg";

import {
  MdGridView,
  MdShoppingCart,
  MdFavorite,
  MdSearch,
  MdSunny,
  MdNightlight,
} from "react-icons/md";

const Navbar = ({ switchNightMode }) => {
  return (
    <header className="border-b-2 ">
      <nav className="max-w-screen-2xl mx-auto   flex justify-between px-5 h-20 items-center gap-10">
        <div className="flex gap-5  items-center">
          <div className="px-2">
            {/* <h1 className="text-3xl text-primary font-semibold">ShC</h1> */}
            <Image src={logo} width={50} />
          </div>
          <Button
            as={Link}
            href="#"
            color="primary"
            className="px-9"
            startContent={<MdGridView className="text-2xl" />}
          >
            Productos
          </Button>
        </div>
        <div className=" w-1/2 min-w-[20rem] max-w-[35rem]">
          <Input
            color="default"
            size="xl"
            placeholder="Buscar productos"
            endContent={<MdSearch className="text-2xl" />}
          />
        </div>
        <div>
          <Switch
            onChange={switchNightMode}
            defaultSelected
            size="md"
            color="default"
            startContent={<MdSunny />}
            endContent={<MdNightlight />}
          />
        </div>
        <div className="flex gap-3">
          <Tooltip color="primary" content={"Carrito de compras"}>
            <Button color="primary" variant="light" isIconOnly as={Link}>
              <MdShoppingCart className="text-2xl" />
            </Button>
          </Tooltip>
          <Tooltip color="primary" content={"Favoritos"}>
            <Button color="primary" variant="light" isIconOnly as={Link}>
              <MdFavorite className="text-2xl" />
            </Button>
          </Tooltip>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
