import { ButtonGroup, Button } from "@nextui-org/react";
import { useContext } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { ShoppingContext } from "../App";
const QuantityControl = ({ amount, size, id }) => {
  const { increaseItemAmount, decreaseItemAmount } =
    useContext(ShoppingContext);

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
        <span className="py-2 w-fit px-5 text-md w text-center">{`${amount} ${
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
      <span className="py-2 max-w-12 w-8 text-xl text-center">{amount}</span>
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
