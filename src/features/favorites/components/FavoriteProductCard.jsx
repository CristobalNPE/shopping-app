import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { MdFavorite, MdShoppingCart, MdDataset } from "react-icons/md";
import useShoppingCart from "../../../hooks/useShoppingCart";
import useFavorites from "../../../hooks/useFavorites";
import QuantityControl from "../../../components/Elements/QuantityControl";
import { Link } from "react-router-dom";

const FavoriteProductCard = ({ product }) => {
  const { addToCart, cartItems } = useShoppingCart();
  const { toggleFavorite } = useFavorites();

  const productInCart = cartItems.find((item) => item.id === product.id);
  return (
    <Card>
      <CardBody>
        <div className="flex flex-col  justify-between gap-10 p-3 sm:flex-row">
          <div className="flex items-center gap-12">
            <Image width={120} src={product.image} />
            <div className="flex flex-col gap-8">
              <h1 className="text-xl">{product.title}</h1>
              <h1 className="text-4xl font-semibold">$ {product.price}</h1>
            </div>
          </div>
          <div className="flex flex-col  justify-center gap-5">
            <Button
              color="danger"
              variant="ghost"
              onClick={() => toggleFavorite(product.id)}
            >
              <MdFavorite className="text-xl" /> Remove from favorites
            </Button>

            <Button
              color="primary"
              variant="ghost"
              as={Link}
              to={`/products/${product.id}`}
            >
              <MdDataset /> Product details
            </Button>
            {/* Button + Quantity control could be its own component here and in product details */}
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
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FavoriteProductCard;
