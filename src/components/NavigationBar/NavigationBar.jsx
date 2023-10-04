import {
  Badge,
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch,
} from "@nextui-org/react";
import { useState } from "react";

import {
  MdAccountCircle,
  MdFavorite,
  MdGridView,
  MdHelp,
  MdNightlight,
  MdShoppingCart,
  MdSunny,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import ShcLogo from "../../assets/ShcLogo";
import useShoppingCart from "../../hooks/useShoppingCart";
import AccountButton from "../AccountButton";
import CartButton from "../CartButton";
import ContactButton from "../ContactButton";
import FavoritesButton from "../FavoritesButton";
import NightModeButtonSwitch from "../NightModeButtonSwitch";

export default function NavigationBar({ switchNightMode, nightMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItemsInCart } = useShoppingCart();

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

      <NavbarContent className="pr-3 sm:hidden" justify="start">
        <NavbarBrand onClick={() => setIsMenuOpen(false)} as={NavLink} to={"."}>
          <ShcLogo size={50} />
          <p className="hidden font-bold text-inherit lg:flex ">
            Shopper&#39;s Choice
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-5 sm:flex md:gap-10"
        justify="center"
      >
        <NavbarBrand as={NavLink} to={"."}>
          <ShcLogo size={50} />
          <p className="font-bold text-inherit">Shopper&#39;s Choice</p>
        </NavbarBrand>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={NavLink}
            to={"products"}
            href="#"
            variant="solid"
            color="primary"
            className="hidden px-7 sm:flex"
          >
            <MdGridView className="text-2xl" />
            Ver Catálogo
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent className="ml-5 hidden md:flex" justify="start">
        <SearchBar />
      </NavbarContent> */}
      {/* 👆👆👆 Commented out until I have access to a better API where I can query for products */}

      <NavbarContent justify="center">
        <NightModeButtonSwitch
          nightMode={nightMode}
          switchNightMode={switchNightMode}
        />
        <ContactButton />
        <AccountButton nightMode={nightMode} />
        <FavoritesButton />
        <CartButton nightMode={nightMode} />
      </NavbarContent>

      {/* ----------------------------------------------- Small devices Menu ------------------------------------------------ */}
      <NavbarMenu className="bg-foregorund text-primary">
        <NavbarMenuItem className="ml-auto">
          <Switch
            onClick={() => setIsMenuOpen(false)}
            onChange={switchNightMode}
            defaultSelected
            size="lg"
            color="primary"
            className="mt-3 "
            startContent={<MdSunny />}
            endContent={<MdNightlight />}
          />
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
          <NavLink className="mb-4 mt-5 flex  items-center gap-2 text-2xl">
            <MdAccountCircle className="text-4xl" /> Mi Cuenta
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to={"products"}
            className="mb-4 mt-5 flex  items-center gap-2 text-2xl"
          >
            <MdGridView className="text-4xl" /> Catálogo de Productos
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to={"favorites"}
            className="mb-4 mt-5 flex  items-center gap-2 text-2xl"
          >
            <MdFavorite className="text-4xl" /> Lista de Favoritos
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to={"cart"}
            className="mb-4 mt-5 flex  items-center gap-2 text-2xl"
          >
            <Badge
              color="danger"
              content={getTotalItemsInCart()}
              size="sm"
              shape="circle"
              className={`${getTotalItemsInCart() === 0 && "hidden"}`}
            >
              <MdShoppingCart className="text-4xl" />{" "}
            </Badge>{" "}
            Ver Carrito
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to={"contact"}
            className="mb-4 mt-5 flex  items-center gap-2 text-2xl"
          >
            <MdHelp className="text-4xl" /> Ayuda / Contacto
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
