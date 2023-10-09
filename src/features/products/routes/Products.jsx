import { MdDiscount } from "react-icons/md";
import { useLoaderData, useSearchParams } from "react-router-dom";
import ProductsImage from "../../../assets/productsBannerM.png";
import PageTitle from "../../../components/Elements/PageTitle";
import Page from "../../../components/Layout/Page";
import { getProducts } from "../api/getProducts";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";

export async function loader() {
  return getProducts();
}

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productsData = useLoaderData();

  const categoryFilter = searchParams.get("category");

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
      <Categories
        categoryFilter={categoryFilter}
        setSearchParams={setSearchParams}
      />
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
