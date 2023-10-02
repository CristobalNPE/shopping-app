import { Button, Image } from "@nextui-org/react";
import QuantityControl from "./QuantityControl";
const ProductHorizontalCard = ({ id, title, price, image }) => {
  return (
    <>
      <article className="flex  justify-between py-3 pr-2 items-center">
        <div className="flex gap-4 items-center">
          <Image width={50} src={image} />
          <div className="w-9/12 flex flex-col gap-1">
            <h1 className="text-md font-regular ">{title}</h1>
            <div className="flex gap-1 w-28">
              <QuantityControl />
              {/* 👆  Pass amount here */}
            </div>
          </div>
        </div>
        <div className="min-w-fit flex flex-col items-end gap-1">
          <h1 className="text-xl font-semibold ">$ {price}</h1>
          <Button
            size="sm"
            color="danger"
            variant="light"
            onClick={() => alert(`Deleted ID ${id}`)}
          >
            Eliminar
          </Button>
        </div>
      </article>
      <hr className="opacity-50" />
    </>
  );
};

export default ProductHorizontalCard;
