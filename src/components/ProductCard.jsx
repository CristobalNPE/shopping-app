import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image
} from "@nextui-org/react";
import { MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ProductCard = ({ id, title, price, category, image, rating }) => {
  return (
    <Card
      as={NavLink}
      to={`/products/${id}`}
      shadow="sm"
      className="drop-shadow-lg p-3 bg-background text-foreground max-w-[20rem] hover:shadow-inner"
    >
      <CardHeader className="flex justify-end">
        <span className="flex items-center gap-1">
          <MdStar className="text-2xl text-primary" /> {rating.rate}
        </span>
      </CardHeader>
      <CardBody className="max-h-[15rem] p-0">
        <div className="flex justify-center h-[15rem]  items-center max-w-xs mx-auto overflow-clip ">
          <Image alt={`Image of product ${title}`} src={image} width={150} />
        </div>
      </CardBody>
      <CardFooter className="flex   h-1/2">
        <div className="flex flex-col  h-full justify-between">
          <h1 className="font-semibold">{title}</h1>
          <h2 className="text-2xl font-bold">$ {price}</h2>
          <Chip className="mt-2" color="secondary">
            {category}
          </Chip>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
