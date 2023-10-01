import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../App";

const CartPopover = () => {
  const { cartItems } = useContext(ShoppingContext);

  // Making it "Controlled" may be the solution to setIt to close when clicking on cart link
  return (
    <aside className="hidden sm:flex flex-col h-[calc(100vh-5rem)] w-[clamp(25rem,25vw,30rem)] p-3 overflow-auto">
      {cartItems.length === 0 ? (
        <div className="flex flex-col h-full items-center justify-center">
          <h1 className="text-2xl font-normal">Tu carro está vacío</h1>
          <h2>Busca productos en nuestro catálogo</h2>
          <Button
            className="mt-12"
            color="success"
            variant="shadow"
            as={NavLink}
            to={"products"}
          >
            Ver Catálogo
          </Button>
        </div>
      ) : (
        <h1 className="text-2xl font-light">
          Tienes <span className="font-semibold">{cartItems.length}</span>{" "}
          productos
        </h1>
      )}

      <div className="grow">{/* Product Horizontal cards */}</div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between text-xl font-semibold">
          <h1 className="">Total:</h1>
          <h1 className="">$ 666.66</h1>
        </div>
        <Button variant="ghost" color="success" as={NavLink} to={"cart"}>
          Ir al carrito
        </Button>
      </div>
    </aside>
  );
};

export default CartPopover;
