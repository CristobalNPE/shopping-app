import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const RedirectCard = ({ title, subtitle, toLink, setIsOpen }) => {
  if (setIsOpen === undefined) {
    setIsOpen = () => {};
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-2xl font-normal">{title}</h1>
      <h2>{subtitle}</h2>
      <Button
        className="mt-12 w-full sm:w-fit"
        color="success"
        size="lg"
        variant="shadow"
        as={NavLink}
        to={toLink}
        onClick={() => setIsOpen(false)}
      >
        Our Products
      </Button>
    </div>
  );
};

export default RedirectCard;
