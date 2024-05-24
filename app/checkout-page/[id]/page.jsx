import { GetProduct } from "@/app/lib/data";
import { FormSection } from "@/app/ui/checkout-page/FormSection";
import { ProductDetails } from "@/app/ui/checkout-page/ProductDetails";

export default async function CheckoutPage({ params, searchParams }) {
  const productData = await GetProduct(params.id);
  const { name, image_url } = productData
  const productPrice = productData.paymentplans[0].first_amount;
  const productId = productData.paymentplans[0].product_id;

  return (
    <div className="bg-checkoutPage background-checkout">
      <div className="max-w-[1007px] mx-auto py-20">
        <div className="bg-[rgba(0,0,0,.6)] rounded-[20px] shadow-checkout grid grid-cols-2 py-6">
          <ProductDetails name={name} image_url={image_url} productPrice={productPrice} />
          <FormSection productId={productId} productPrice={productPrice} searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
}
