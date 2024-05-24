const API_KEY = process.env.API_KEY;

export async function CreateBuyUrl(product_id, buyer) {
  const res = await fetch(
    `https://www.digistore24.com/api/call/createBuyUrl?product_id=${product_id}&${buyer}`,
    {
      method: "POST",
      headers: {
        "X-DS-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }
  );

  const responseData = await res.json();
  const urlPayment = responseData.data.url;
  return urlPayment;
}
