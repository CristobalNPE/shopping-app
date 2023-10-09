import { Spinner } from "@nextui-org/react";
import { Suspense } from "react";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import PageTitle from "../../../components/Elements/PageTitle";
import Page from "../../../components/Layout/Page";
import { getCategories } from "../api/getCategories";
import { getProducts } from "../api/getProducts";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import ProductsBanner from "../components/ProductsBanner";

export async function loader() {

  return defer({
    productsData: getProducts(),
    categoriesData: getCategories(),
  });
}

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();

  const categoryFilter = searchParams.get("category");

  function renderProductElements(productsData) {
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
      <>
        <main className="mt-10 grid justify-center gap-10  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productElements}
        </main>
      </>
    );
  }

  return (
    <Page>
      <PageTitle>
        Our Products{" "}
        {categoryFilter && (
          <span className="text-lg capitalize"> - {categoryFilter}</span>
        )}
      </PageTitle>
      <Suspense
        fallback={
          <div className="flex h-48 w-full items-center justify-center">
            <Spinner size="lg" color="primary" />
          </div>
        }
      >
        <Await resolve={dataPromise.categoriesData}>
          {(categories) => {
            return (
              <Categories
                categories={categories}
                categoryFilter={categoryFilter}
                setSearchParams={setSearchParams}
              />
            );
          }}
        </Await>

        <ProductsBanner />

        <Await resolve={dataPromise.productsData}>
          {renderProductElements}
        </Await>
      </Suspense>
    </Page>
  );
};

export default Products;
