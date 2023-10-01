import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import { Button, Chip, Image } from "@nextui-org/react";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

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

  return (
    <Page>
      <div className="flex flex-col sm:flex-row p-12 bg-background text-foreground rounded-lg gap-10 items-center">
        <Image className="min-w-[10rem] max-w-[20rem]" src={product.image} />
        <div className="flex flex-col gap-12">
          <Chip color="secondary">{product.category}</Chip>
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <h2 className="text-4xl font-bold">$ {product.price}</h2>
          <p>{product.description}</p>

          <div className="flex gap-10">
            <Button color="primary">
              <MdShoppingCart className="text-xl" /> Añadir al carrito
            </Button>
            <Button color="danger" variant="flat">
              <MdFavorite className="text-xl" /> Añadir a favoritos
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ProductDetails;