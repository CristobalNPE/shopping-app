import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../App";
import ProductHorizontalCard from "./ProductHorizontalCard";
import { roundNumber } from "../utils/utils";

const CartPopover = ({ setIsOpen }) => {
  const { cartItems, getTotalItemsInCart } = useContext(ShoppingContext);

  const subtotal = roundNumber(
    cartItems.map((item) => item.total).reduce((x, y) => x + y, 0),
  );

  const productHorizontalCardsElements = cartItems.map((item) => (
    <ProductHorizontalCard key={item.id} item={item} />
  ));

  return (
    <aside className="hidden h-[calc(100vh-5rem)] w-[clamp(35rem,25vw,40rem)] flex-col p-3 sm:flex">
      {cartItems.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="text-2xl font-normal">Tu carro está vacío</h1>
          <h2>Busca productos en nuestro catálogo</h2>
          <Button
            className="mt-12"
            color="success"
            variant="shadow"
            as={NavLink}
            to={"products"}
            onClick={() => setIsOpen(false)}
          >
            Ver Catálogo
          </Button>
        </div>
      ) : (
        <h1 className="text-2xl font-light">
          Tienes <span className="font-semibold">{getTotalItemsInCart()}</span>{" "}
          {getTotalItemsInCart() > 1 ? "productos" : "producto"}
        </h1>
      )}

      <div className="mt-5 grow overflow-auto">
        {productHorizontalCardsElements}
      </div>

      <div className="flex flex-col gap-5">
        <div className="mt-8 flex justify-between text-xl font-bold">
          <h1 className="">Subtotal:</h1>
          <h1 className="">$ {subtotal}</h1>
        </div>
        <Button
          onClick={() => setIsOpen(false)}
          variant="ghost"
          color="success"
          as={NavLink}
          to={"cart"}
        >
          Ir al Detalle
        </Button>
      </div>
    </aside>
  );
};

export default CartPopover;
