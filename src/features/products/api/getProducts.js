export async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw {
      message: "Failed to fetch products",
      statusText: response.statusText,
      status: response.status,
    };
  }

  const data = await response.json();

  return data;
}
