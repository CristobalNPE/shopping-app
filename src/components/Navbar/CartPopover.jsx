import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import { roundNumber } from "../../utils/utils";
import ProductHorizontalCard from "../../features/cart/components/ProductHorizontalCard";
import RedirectCard from "../Elements/RedirectCard";

const CartPopover = ({ setIsOpen }) => {
  const { cartItems, getTotalItemsInCart } = useShoppingCart();

  const subtotal = roundNumber(
    cartItems.map((item) => item.total).reduce((x, y) => x + y, 0),
  );

  const productHorizontalCardsElements = cartItems.map((item) => (
    <ProductHorizontalCard key={item.id} item={item} />
  ));

  return (
    <aside className="hidden h-[calc(100vh-5rem)] w-[clamp(35rem,25vw,40rem)] flex-col p-3 sm:flex">
      {cartItems.length === 0 ? (
        <RedirectCard
          title={`Your shopping cart is empty`}
          subtitle={`Check out our products if you need inspiration`}
          toLink={`products`}
          setIsOpen={setIsOpen}
        />
      ) : (
        <h1 className="text-2xl font-light">
          You have <span className="font-semibold">{getTotalItemsInCart()}</span>{" "}
          {getTotalItemsInCart() > 1 ? "products" : "product"}
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
          Go to checkout
        </Button>
      </div>
    </aside>
  );
};

export default CartPopover;
