const API_KEY = process.env.API_KEY;

export async function ListProducts() {
  const res = await fetch(
    "https://www.digistore24.com/api/call/listProducts?sort_by=group",
    {
      method: "GET",
      headers: {
        "X-DS-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }
  );

  const responseData = await res.json();
  const data = responseData.data;
  return data;
}

export async function GetProduct(product_id) {
  const res = await fetch(
    `https://www.digistore24.com/api/call/getProduct?product_id=${product_id}`,
    {
      method: "GET",
      headers: {
        "X-DS-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }
  );
  const responseData = await res.json();
  const data = responseData.data;
  return data;
}
