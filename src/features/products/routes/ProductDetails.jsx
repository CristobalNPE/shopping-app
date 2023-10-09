import { Button, Chip, Image, Link } from "@nextui-org/react";
import { MdArrowCircleLeft, MdFavorite, MdShoppingCart } from "react-icons/md";
import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import QuantityControl from "../../../components/Elements/QuantityControl";
import Page from "../../../components/Layout/Page";
import useFavorites from "../../../hooks/useFavorites";
import useShoppingCart from "../../../hooks/useShoppingCart";
import { getProduct } from "../api/getProduct";

export async function loader({ params }) {
  return getProduct(params.id);
}

const ProductDetails = () => {
  const location = useLocation();

  const product = useLoaderData();

  const search = location.state?.search || "";
  const categoryFilter = location.state?.categoryFilter || "all";

  const { addToCart, cartItems } = useShoppingCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const productInCart = cartItems.find((item) => item.id === product.id);

  return (
    <Page>
      <Link
        as={NavLink}
        to={`..${search}`}
        relative="path"
        className="flex gap-3"
        color="foreground"
      >
        <MdArrowCircleLeft className="text-2xl" /> Go back to {categoryFilter}{" "}
        products
      </Link>

      <div className="flex flex-col items-center gap-10 rounded-lg bg-background p-2 pt-12 text-foreground sm:flex-row sm:p-12">
        <Image
          className="min-w-[10rem] max-w-[15rem] lg:max-w-[20rem]"
          src={product.image}
        />

        <div className="flex flex-col gap-12">
          <Chip color="secondary">{product.category}</Chip>
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <h2 className="text-4xl font-bold">$ {product.price}</h2>
          <p>{product.description}</p>

          <div className="flex flex-col gap-10 md:flex-row">
            {productInCart !== undefined ? (
              <QuantityControl
                id={product.id}
                size="lg"
                amount={productInCart.amount}
              />
            ) : (
              <Button onClick={() => addToCart(product)} color="primary">
                <MdShoppingCart className="text-xl" /> Add to cart
              </Button>
            )}
            {!isFavorite(product.id) ? (
              <Button
                color="danger"
                variant="flat"
                onClick={() => toggleFavorite(product.id)}
              >
                <MdFavorite className="text-xl" /> Add to favorites
              </Button>
            ) : (
              <Button
                color="danger"
                variant="ghost"
                onClick={() => toggleFavorite(product.id)}
              >
                <MdFavorite className="text-xl" /> Remove from favorites
              </Button>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ProductDetails;
