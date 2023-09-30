import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  Switch,
  Tooltip,
  Input,
  Badge,
} from "@nextui-org/react";
import Logo from "../assets/Logo.svg";

import {
  MdGridView,
  MdShoppingCart,
  MdFavorite,
  MdSearch,
  MdSunny,
  MdNightlight,
  MdAccountCircle,
  MdHelp,
} from "react-icons/md";

export default function NavigationBar({ switchNightMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
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

      <NavbarContent className="sm:hidden pr-3 " justify="center">
        <NavbarBrand>
          <Image src={Logo} width={50} />
          <p className="font-bold text-inherit ">Shopper&#39;s Choice</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarBrand>
          <Image className=" " src={Logo} width={50} />
          <p className="font-bold text-inherit">Shopper&#39;s Choice</p>
        </NavbarBrand>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
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
        <Input
          color="default"
          size="xl"
          placeholder="Buscar productos"
          endContent={<MdSearch className="text-2xl" />}
        />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Switch
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
            <Button color="primary" variant="light" isIconOnly as={Link}>
              <MdHelp className="text-2xl" />
            </Button>
          </Tooltip>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Tooltip color="primary" content={"Mi Cuenta"}>
            <Button color="primary" variant="light" isIconOnly as={Link}>
              <MdAccountCircle className="text-2xl" />
            </Button>
          </Tooltip>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Tooltip color="primary" content={"Favoritos"}>
            <Button color="primary" variant="light" isIconOnly as={Link}>
              <MdFavorite className="text-2xl" />
            </Button>
          </Tooltip>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Badge color="danger" content={11} shape="circle" size="lg">
            <Tooltip color="primary" content={"Ver carrito"}>
              <Button color="primary" variant="light" isIconOnly as={Link}>
                <MdShoppingCart className="text-2xl" />
              </Button>
            </Tooltip>
          </Badge>
        </NavbarItem>
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
          <Link className="flex gap-2 items-center  mt-5 mb-4 text-2xl">
            <MdGridView className="text-4xl" /> Catálogo de Productos
          </Link>
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
