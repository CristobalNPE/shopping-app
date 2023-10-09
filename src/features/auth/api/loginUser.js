export async function loginUser(credentials) {
  const response = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw {
      message: data.message,
      statusText: data.statusText,
      status: data.status,
    };
  }
  return data;
}
