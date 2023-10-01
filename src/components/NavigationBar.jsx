import {
  Badge,
  Button,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Switch,
  Tooltip,
} from "@nextui-org/react";
import { useState } from "react";
import Logo from "../assets/Logo.svg";

import {
  MdAccountCircle,
  MdFavorite,
  MdGridView,
  MdHelp,
  MdNightlight,
  MdShoppingCart,
  MdSunny,
} from "react-icons/md";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import AccountPopover from "./AccountPopover";
import CartPopover from "./CartPopover";

export default function NavigationBar({ switchNightMode, nightMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="fixed"
      maxWidth="2xl"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Image src={Logo} width={50} />
          <p className="hidden lg:flex font-bold text-inherit ">
            Shopper&#39;s Choice
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarBrand as={NavLink} to={"/"}>
          <Image className=" " src={Logo} width={50} />
          <p className="font-bold text-inherit">Shopper&#39;s Choice</p>
        </NavbarBrand>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={NavLink}
            to={"/products"}
            href="#"
            variant="solid"
            color="primary"
            className="hidden sm:flex px-7"
          >
            <MdGridView className="text-2xl" />
            Ver Catálogo
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden md:flex ml-5" justify="start">
        <SearchBar />
      </NavbarContent>

      <NavbarContent justify="center">
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
        <NavbarItem className="hidden sm:flex">
          <Tooltip color="primary" content={"Ayuda / Contacto"}>
            <Button
              color="primary"
              variant="light"
              isIconOnly
              as={NavLink}
              to={"/contact"}
            >
              <MdHelp className="text-2xl" />
            </Button>
          </Tooltip>
        </NavbarItem>
        <Tooltip color="primary" content={"Mi Cuenta"}>
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
        <NavbarItem className="hidden sm:flex">
          <Tooltip color="primary" content={"Favoritos"}>
            <Button color="primary" variant="light" isIconOnly as={Link}>
              <MdFavorite className="text-2xl" />
            </Button>
          </Tooltip>
        </NavbarItem>

        <Badge color="danger" content={11} shape="circle" size="lg">
          <Tooltip color="primary" content={"Ver carrito"}>
            <NavbarItem className="hidden sm:flex">
              <Popover
                shouldBlockScroll
                backdrop="opaque"
                placement="bottom-end"
              >
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
      </NavbarContent>

      <NavbarMenu className="bg-foregorund text-primary">
        <NavbarMenuItem className="ml-auto">
          <Switch
            onChange={switchNightMode}
            defaultSelected
            size="lg"
            color="primary"
            className="mt-3 "
            startContent={<MdSunny />}
            endContent={<MdNightlight />}
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="flex gap-2 items-center  mt-5 mb-4 text-2xl">
            <MdAccountCircle className="text-4xl" /> Mi Cuenta
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            to={"/products"}
            className="flex gap-2 items-center  mt-5 mb-4 text-2xl"
          >
            <MdGridView className="text-4xl" /> Catálogo de Productos
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="flex gap-2 items-center  mt-5 mb-4 text-2xl">
            <MdFavorite className="text-4xl" /> Lista de Favoritos
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="flex gap-2 items-center  mt-5 mb-4 text-2xl">
            <Badge color="danger" content={11} size="sm" shape="circle">
              <MdShoppingCart className="text-4xl" />{" "}
            </Badge>{" "}
            Ver Carrito
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="flex gap-2 items-center  mt-5 mb-4 text-2xl">
            <MdHelp className="text-4xl" /> Ayuda / Contacto
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}