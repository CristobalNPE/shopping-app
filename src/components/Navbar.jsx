import {
  Button,
  Input,
  Link,
  Tooltip,
  Switch,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import logo from "../assets/Logo.svg";

import {
  MdGridView,
  MdShoppingCart,
  MdFavorite,
  MdSearch,
  MdSunny,
  MdNightlight,
  MdHomeFilled,
} from "react-icons/md";

const Navbar = ({ switchNightMode }) => {
  return (
    <header className="border-b-2 ">
      <nav className="max-w-screen-2xl mx-auto  h-20 flex justify-between px-5 items-center gap-10">
        <div className="flex gap-5  items-center">
          <div className="px-2">
            <Image className="hidden sm:flex" src={logo} width={50} />

            <div className="flex sm:hidden">
              <Popover placement="right" >
                <PopoverTrigger>
                  <Image src={logo} width={50} />
                </PopoverTrigger>

                <PopoverContent>
                  <Button color="primary" variant="light" as={Link}>
                    <MdHomeFilled className="text-2xl" />
                    Inicio
                  </Button>
                  <Button
                    as={Link}
                    href="#"
                    variant="light"
                    color="primary"
                    className="px-9"
                    startContent={<MdGridView className="text-2xl" />}
                  >
                    Productos
                  </Button>

                  <Button color="primary" variant="light" as={Link}>
                    <MdShoppingCart className="text-2xl" />
                    Carrito de compras
                  </Button>

                  <Button color="primary" variant="light" as={Link}>
                    <MdFavorite className="text-2xl" />
                    Favoritos
                  </Button>
                  <Switch
                    onChange={switchNightMode}
                    defaultSelected
                    size="sm"
                    color="default"
                    className="mt-3 "
                    startContent={<MdSunny />}
                    endContent={<MdNightlight />}
                  >
                    Modo oscuro
                  </Switch>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button
            as={Link}
            href="#"
            color="primary"
            className="hidden sm:flex px-9"
            startContent={<MdGridView className="text-2xl" />}
          >
            Productos
          </Button>
        </div>
        <div className=" w-11/12 sm:w-1/2  sm:min-w-[20rem] max-w-[35rem]">
          <Input
            color="default"
            size="xl"
            placeholder="Buscar productos"
            endContent={<MdSearch className="text-2xl" />}
          />
        </div>

        <div className="hidden sm:flex">
          <Switch
            onChange={switchNightMode}
            defaultSelected
            size="md"
            color="default"
            startContent={<MdSunny />}
            endContent={<MdNightlight />}
          />
        </div>
        <div className=" gap-3 hidden sm:flex">
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
