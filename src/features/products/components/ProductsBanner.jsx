import { MdDiscount } from "react-icons/md";
import ProductsImage from "../../../assets/productsBannerM.png";

const ProductsBanner = () => {
  return (
    <article className="my-5 flex h-56 flex-col-reverse items-center justify-center overflow-hidden rounded-lg  bg-gradient-to-r from-primary to-secondary px-5 sm:flex-row sm:justify-between">
      <div className="p-5 text-sm">
        <h4 className="flex items-center gap-1 ">
          <MdDiscount /> Promo
        </h4>
        <h1 className="text-3xl font-semibold">
          Get 20% dicount on all purchases
        </h1>
        <h3 className="">
          Try our coupon at checkout:{" "}
          <span className="font-bold">SHCVEINTE</span>
        </h3>
      </div>
      <img src={ProductsImage} className="hidden h-72 md:flex" />
    </article>
  );
};

export default ProductsBanner;
