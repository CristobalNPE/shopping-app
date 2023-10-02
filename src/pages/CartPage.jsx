import { Button, ButtonGroup, Input } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { BiSolidCoupon } from "react-icons/bi";
import { ShoppingContext } from "../App";
import Page from "../components/Page";
import PageTitle from "../components/PageTitle";
import ProductHorizontalCard from "../components/ProductHorizontalCard";
import { NavLink } from "react-router-dom";
import { roundNumber } from "../utils/utils";
const CartPage = () => {
  const { getTotalItemsInCart, emptyCart, applyDiscount, cartItems } =
    useContext(ShoppingContext);
  const subtotal = roundNumber(
    cartItems.map((item) => item.total).reduce((x, y) => x + y, 0)
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
        <div className="flex flex-col h-full items-center justify-center">
          <h1 className="text-2xl font-normal">Tu carro está vacío</h1>
          <h2>Busca productos en nuestro catálogo</h2>
          <Button
            className="mt-12"
            color="success"
            variant="shadow"
            as={NavLink}
            to={"/products"}
          >
            {/* TODO: FIX THIS ABSOLUTE LINK 🥵🥵🥵🥵🥵🥵 */}
            Ver Catálogo
          </Button>
        </div>
      ) : (
        <article className="flex flex-col sm:flex-row gap-12">
          <section className="grow">
            <PageTitle>Mi Carrito</PageTitle>
            <h2>
              {getTotalItemsInCart()}{" "}
              {`${getTotalItemsInCart() !== 1 ? "productos" : "producto"}`}
            </h2>
            <div className="">{productHorizontalCardElements}</div>
          </section>
          <aside className="rounded-lg p-5 shadow-md w-full sm:w-80 border-1 ">
            <h1 className="text-sm mb-2">Ingrese un cupón de descuento</h1>
            <ButtonGroup>
              <Input
                placeholder="Ej: SHCVEINTE"
                endContent={<BiSolidCoupon className="opacity-30" />}
                radius="none"
                value={discountCode}
                onChange={handleChange}
              />
              <Button color="secondary" onClick={applyDiscountCode}>
                Aplicar
              </Button>
            </ButtonGroup>
            <hr className="my-5 opacity-60" />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Resumen del pedido:</h1>
              <hr className="my-5 opacity-60" />
              <div className="flex justify-between items-center">
                <h2 className="text-xl">Subtotal: </h2>
                <h2 className="text-xl font-semibold">$ {subtotal} </h2>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="text-xl">Descuentos: </h2>
                <h2 className="text-xl  font-semibold">- $ {discountTotal}</h2>
              </div>
              <hr className="my-5 opacity-60" />
              <div className="flex justify-between items-center">
                <h2 className="text-2xl">Total:</h2>
                <h2 className="text-3xl font-bold">$ {total}</h2>
              </div>

              <div className="flex flex-col justify-center mt-5 gap-3">
                <Button color="secondary">Continuar</Button>
                <Button onClick={emptyCart} variant="light" color="danger">
                  Vaciar carrito
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
