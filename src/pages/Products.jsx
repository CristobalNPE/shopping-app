import { useEffect, useState } from "react";
import Page from "../components/Page";
import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

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

  const productElements = productsData.map((product) => (
    <ProductCard key={product.id} {...product} />
  ));

  return (
    <Page>
      <PageTitle>Nuestros Productos</PageTitle>

      <main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 mt-10 justify-center">
        {productElements}
      </main>
    </Page>
  );
};

export default Products;
