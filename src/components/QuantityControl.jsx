import { Button, ButtonGroup } from "@nextui-org/react";
import { MdAdd, MdRemove } from "react-icons/md";
import useShoppingCart from "../hooks/useShoppingCart";
const QuantityControl = ({ amount, size, id }) => {
  const { increaseItemAmount, decreaseItemAmount } = useShoppingCart();

  if (size === "lg") {
    return (
      <ButtonGroup>
        <Button
          onClick={() => decreaseItemAmount(id)}
          variant="solid"
          color="danger"
          size="md"
          isIconOnly
        >
          <MdRemove />
        </Button>
        <span className=" text-md w w-full  select-none whitespace-nowrap px-5 py-2 text-center md:w-fit">{`${amount} ${
          amount > 1 ? "unidades" : "unidad"
        }`}</span>
        <Button
          onClick={() => increaseItemAmount(id)}
          variant="solid"
          color="success"
          size="md"
          isIconOnly
        >
          <MdAdd />
        </Button>
      </ButtonGroup>
    );
  }

  return (
    <ButtonGroup>
      <Button
        onClick={() => decreaseItemAmount(id)}
        variant="flat"
        color="danger"
        size="sm"
        isIconOnly
      >
        <MdRemove />
      </Button>
      <span className="max-w-12 w-8 py-2 text-center text-xl">{amount}</span>
      <Button
        onClick={() => increaseItemAmount(id)}
        variant="flat"
        color="success"
        size="sm"
        isIconOnly
      >
        <MdAdd />
      </Button>
    </ButtonGroup>
  );
};

export default QuantityControl;
