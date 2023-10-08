import { Button, Image } from "@nextui-org/react";
import useShoppingCart from "../hooks/useShoppingCart";
import QuantityControl from "./QuantityControl";
const ProductHorizontalCard = ({ item }) => {
  const { id, title, image, amount, total } = item;

  const { removeFromCart } = useShoppingCart();

  return (
    <>
      <article className="flex  items-center justify-between py-3 pr-2">
        <div className="flex items-center gap-4">
          <Image width={50} src={image} />
          <div className="flex w-9/12 flex-col gap-1">
            <h1 className="text-md font-regular ">{title}</h1>
            <div className="flex w-28 gap-1">
              <QuantityControl amount={amount} id={id} />
            </div>
          </div>
        </div>
        <div className="flex min-w-fit flex-col items-end gap-1">
          <h1 className="text-xl font-semibold ">$ {total}</h1>
          <Button
            size="sm"
            color="danger"
            variant="light"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </Button>
        </div>
      </article>
      <hr className="opacity-50" />
    </>
  );
};

export default ProductHorizontalCard;
