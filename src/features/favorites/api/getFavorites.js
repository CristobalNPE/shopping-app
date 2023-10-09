const fetchProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error(`Error fetching product with id ${id}`);
  }
  const data = await response.json();
  return data;
};

export const getFavorites = async (favorites) => {
  const productPromises = favorites.map((id) => fetchProduct(id));
  const products = await Promise.all(productPromises);
  return products.filter((product) => product !== null);
};
