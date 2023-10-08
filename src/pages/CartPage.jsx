import { Button, ButtonGroup, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BiSolidCoupon } from "react-icons/bi";
import Page from "../components/Page";
import PageTitle from "../components/PageTitle";
import ProductHorizontalCard from "../components/ProductHorizontalCard";
import RedirectCard from "../components/RedirectCard";
import useShoppingCart from "../hooks/useShoppingCart";
import { roundNumber } from "../utils/utils";
const CartPage = () => {
  const { getTotalItemsInCart, emptyCart, applyDiscount, cartItems } =
    useShoppingCart();
  const subtotal = roundNumber(
    cartItems.map((item) => item.total).reduce((x, y) => x + y, 0),
  );

  const [discountCode, setDiscountCode] = useState("");
  const [discountTotal, setDiscountTotal] = useState(0);
  const [total, setTotal] = useState(subtotal);

  const handleChange = (e) => {
    let { value } = e.target;
    setDiscountCode(value);
  };

  const applyDiscountCode = () => {
    let discountInfo = applyDiscount(discountCode);
    setDiscountTotal(discountInfo.discountTotal);
    setTotal(discountInfo.total);
  };

  useEffect(() => {
    applyDiscountCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subtotal, discountCode]);

  const productHorizontalCardElements = cartItems.map((item) => (
    <ProductHorizontalCard key={item.id} item={item} />
  ));

  return (
    <Page>
      {cartItems.length === 0 ? (
        <RedirectCard
          title={`Your shopping cart is empty`}
          subtitle={`Check out our products if you need inspiration`}
          toLink={`/products`}
        />
      ) : (
        <article className="flex flex-col gap-12 sm:flex-row">
          <section className="grow">
            <PageTitle>My shopping cart</PageTitle>
            <h2>
              {getTotalItemsInCart()}{" "}
              {`${getTotalItemsInCart() !== 1 ? "products" : "product"}`}
            </h2>
            <div className="">{productHorizontalCardElements}</div>
          </section>
          <aside className="w-full rounded-lg border-1 p-5 shadow-md sm:w-80 ">
            <h1 className="mb-2 text-sm">Enter a valid discount coupon</h1>
            <ButtonGroup>
              <Input
                placeholder="Ej: SHCVEINTE"
                endContent={<BiSolidCoupon className="opacity-30" />}
                radius="none"
                value={discountCode}
                onChange={handleChange}
              />
              <Button color="secondary" onClick={applyDiscountCode}>
                Apply
              </Button>
            </ButtonGroup>
            <hr className="my-5 opacity-60" />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Order Summary:</h1>
              <hr className="my-5 opacity-60" />
              <div className="flex items-center justify-between">
                <h2 className="text-xl">Subtotal: </h2>
                <h2 className="text-xl font-semibold">$ {subtotal} </h2>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl">Discounts: </h2>
                <h2 className="text-xl  font-semibold">- $ {discountTotal}</h2>
              </div>
              <hr className="my-5 opacity-60" />
              <div className="flex items-center justify-between">
                <h2 className="text-2xl">Total:</h2>
                <h2 className="text-3xl font-bold">$ {total}</h2>
              </div>

              <div className="mt-5 flex flex-col justify-center gap-3">
                <Button color="secondary">Continue</Button>
                <Button onClick={emptyCart} variant="light" color="danger">
                  Empty cart
                </Button>
              </div>
            </div>
          </aside>
        </article>
      )}
    </Page>
  );
};

export default CartPage;
