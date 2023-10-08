import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";
import { MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  price,
  category,
  image,
  rating,
  search,
  categoryFilter,
}) => {
  return (
    <Card
      as={NavLink}
      to={`/products/${id}`}
      state={{ search: search, categoryFilter: categoryFilter }}
      shadow="sm"
      className="max-w-[20rem] bg-background p-3 text-foreground drop-shadow-lg hover:shadow-inner"
    >
      <CardHeader className="flex justify-end">
        <span className="flex items-center gap-1">
          <MdStar className="text-2xl text-primary" /> {rating.rate}
        </span>
      </CardHeader>
      <CardBody className="max-h-[15rem] p-0">
        <div className="mx-auto flex h-[15rem]  max-w-xs items-center justify-center overflow-clip ">
          <Image
            alt={`Image of product ${title}`}
            src={image}
            width={150}
            className="aspect-square object-contain"
          />
        </div>
      </CardBody>
      <CardFooter className="flex   h-1/2">
        <div className="flex h-full  flex-col justify-between">
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
