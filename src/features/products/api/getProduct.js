export async function getProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) {
    throw {
      message: `Failed to fetch product with id: ${id}`,
      statusText: response.statusText,
      status: response.status,
    };
  }

  const data = await response.json();

  return data;
}
