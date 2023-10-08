import { useEffect, useState } from "react";
import Page from "../components/Page";
import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";

import { Button } from "@nextui-org/react";
import { MdDiscount, MdClose } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import ProductsImage from "../assets/productsBannerM.png";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [categories, setCategories] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFilter = searchParams.get("category");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories",
        );
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        let data = await response.json();
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Http error: ${response.status}`);
        }
        let data = await response.json();
        setProductsData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProductsData();
  }, []);

  const displayedProducts = categoryFilter
    ? productsData.filter((product) => product.category === categoryFilter)
    : productsData;

  const productElements = displayedProducts.map((product) => (
    <ProductCard
      key={product.id}
      search={`?${searchParams.toString()}`}
      categoryFilter={categoryFilter}
      {...product}
    />
  ));

  return (
    <Page>
      <PageTitle>Our Products</PageTitle>
      <div className="my-5 flex flex-wrap gap-3">
        {categories.map((c, index) => (
          <Button
            onClick={() => setSearchParams({ category: c })}
            className="sm:w-fit "
            variant="flat"
            color="warning"
            key={c || index}
          >
            {c}
          </Button>
        ))}
        {categoryFilter && (
          <Button
            onClick={() => setSearchParams({})}
            className="ml-auto w-full sm:w-fit"
            variant="bordered"
            color="danger"
          >
            <MdClose className="text-xl" /> Clear Filter
          </Button>
        )}
      </div>
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
      <main className="mt-10 grid justify-center gap-10  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productElements}
      </main>
    </Page>
  );
};

export default Products;
