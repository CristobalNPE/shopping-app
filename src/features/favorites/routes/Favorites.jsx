import { useEffect, useState } from "react";
import FavoriteProductCard from "../components/FavoriteProductCard";
import Page from "../../../components/Layout/Page";
import PageTitle from "../../../components/Elements/PageTitle";
import RedirectCard from "../../../components/Elements/RedirectCard";
import useFavorites from "../../../hooks/useFavorites";
import { getFavorites } from "../api/getFavorites";
import { Spinner } from "@nextui-org/react";

const Favorites = () => {
  const { favorites } = useFavorites();
  const [favoriteProducts, setFavoritesProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        setLoading(true);
        const data = await getFavorites(favorites);
        setFavoritesProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
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
      ) : loading ? (
        <div className="mt-20 flex justify-center">
          <Spinner label="Updating your favorites..." size="lg" />
        </div>
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
