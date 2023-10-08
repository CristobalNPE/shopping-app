import { useEffect, useState } from "react";
import FavoriteProductCard from "../components/FavoriteProductCard";
import Page from "../../../components/Page";
import PageTitle from "../../../components/PageTitle";
import RedirectCard from "../../../components/RedirectCard";
import useFavorites from "../../../hooks/useFavorites";

const Favorites = () => {
  const { favorites } = useFavorites();
  const [favoriteProducts, setFavoritesProducts] = useState([]);

  const fetchProduct = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching product with id ${id}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      const productPromises = favorites.map((id) => fetchProduct(id));

      try {
        const products = await Promise.all(productPromises);
        setFavoritesProducts(products.filter((product) => product !== null));
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavoriteProducts();
  }, [favorites]);

  const favoriteProductsElements = favoriteProducts.map((product) => (
    <FavoriteProductCard key={product.id} product={product} />
  ));

  return (
    <Page>
      {favorites.length === 0 ? (
        <RedirectCard
          title={`You have nothing in your favorites list yet`}
          subtitle={`Check out our products if you need inspiration`}
          toLink={`/products`}
        />
      ) : (
        <>
          <PageTitle>Favorite products</PageTitle>
          <section className="mt-10 flex flex-col gap-5">
            {favoriteProductsElements}
          </section>
        </>
      )}
    </Page>
  );
};

export default Favorites;
