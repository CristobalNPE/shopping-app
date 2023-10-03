import { Button, Chip, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import QuantityControl from "../components/QuantityControl";
import useShoppingCart from "../hooks/useShoppingCart";
import useFavorites from "../hooks/useFavorites";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const { addToCart, cartItems } = useShoppingCart();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();



  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`Error fetching product with id ${id}`);
        }
        let data = await response.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  const productInCart = cartItems.find((item) => item.id === product.id);

  return (
    <Page>
      <div className="flex flex-col items-center gap-10 rounded-lg bg-background p-12 text-foreground sm:flex-row">
        <Image className="min-w-[10rem] max-w-[20rem]" src={product.image} />

        <div className="flex flex-col gap-12">
          <Chip color="secondary">{product.category}</Chip>
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <h2 className="text-4xl font-bold">$ {product.price}</h2>
          <p>{product.description}</p>

          <div className="flex gap-10">
            {productInCart !== undefined ? (
              <QuantityControl
                id={product.id}
                size="lg"
                amount={productInCart.amount}
              />
            ) : (
              <Button onClick={() => addToCart(product)} color="primary">
                <MdShoppingCart className="text-xl" /> Añadir al carrito
              </Button>
            )}
            {!isFavorite(product.id) ? (
              <Button
                color="danger"
                variant="flat"
                onClick={() => toggleFavorite(product.id)}
              >
                <MdFavorite className="text-xl" /> Añadir a favoritos
              </Button>
            ) : (
              <Button
                color="danger"
                variant="ghost"
                onClick={() => toggleFavorite(product.id)}
              >
                <MdFavorite className="text-xl" /> Quitar de favoritos
              </Button>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ProductDetails;
