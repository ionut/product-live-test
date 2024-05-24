import { GetProduct } from '@/app/lib/data'
import Image from 'next/image';
import React from 'react'
import { CheckoutButton } from '../components/Buttons';
import { sen } from '@/app/styles/fonts';

export const ProductCard = async ({ id, searchParams }) => {
    // data fetched from api
    const productData = await GetProduct(id);
    const { name, image_url } = productData;
    const productPrice = productData.paymentplans[0].first_amount;
    const productId = productData.paymentplans[0].id;
    const extractPackageNumber = name.split(" ").at(4);
    // data populated on ui
    const singlePriceDeclared = 39;
    const productsNumberTotal = Number.parseInt(extractPackageNumber) * 2;
    const fullPrice = singlePriceDeclared.toFixed(0) * productsNumberTotal;
    const discountPercentage = (Number.parseInt(productPrice).toFixed(0) / fullPrice) * 100;
    const pricePerPackAfterDiscount = Math.round(Number.parseInt(productPrice).toFixed(0) / extractPackageNumber);

    // we will extract name(maybe add some translations for title names), image_url, first_amount
    return (
        <div className={`rounded-[20px]  border-b-[10px] space-y-5 p-5 ${productId === '1115218' ? 'order-1 bg-white border-b-deep-orange' : productId === '1115227' ? 'order-2 bg-[#d00] border-[6px] border-white' : "order-3 bg-white border-b-deep-orange"}`}>
            <h3 className={`text-center  text-[27px] leading-[30px] font-bold ${productId === '1115227' ? "text-white" : "text-deep-orange"}`}>{name}</h3>
            <div className="relative">
                <h2 className="absolute right-0 top-0 size-[75px] bg-[#558300] border-[3px] border-[#1aff00] rounded-full flex justify-center items-center"><span className="text-lg text-white font-bold">{Number.parseInt(productPrice).toFixed(0) - fullPrice}€</span></h2>
                <Image src={image_url} alt={name} width={240} height={190} className="mx-auto" />
            </div>
            <h2 className={`text-shadow-number ${sen.className} text-[87px] font-bold leading-[50px] ${productId === '1115227' ? "text-white" : "text-deep-orange"} text-center`}>{pricePerPackAfterDiscount}€</h2>
            <p className={`text-xl font-bold  text-center whitespace-pre-line ${productId === '1115227' ? "text-white" : "text-deep-orange"}`}>{Number.parseInt(productPrice).toFixed(0) < 50 ? "Ανά κουτί\n+6€ Αποστολή" : "Ανά κουτί\nΔωρεάν αποστολή"}</p>
            <CheckoutButton id={id} searchParams={searchParams} extraStyle={'bg-deep-orange text-white'}>Θέλω να παραγγείλω</CheckoutButton>
            <div className="flex flex-wrap justify-center">
                <Image src="/g-pay.webp" alt="Google Pay" width={80} height={25} />
                <Image src="/apple-pay.webp" alt="Apple Pay" width={80} height={25} />
                <Image src="/visa-pay.webp" alt="Visa Pay" width={80} height={25} />
                <Image src="/mastercard-pay.webp" alt="Mastercard Pay" width={80} height={25} />
                <Image src="/paypal-pay.webp" alt="Paypal Pay" width={80} height={25} />
            </div>
            <div className="space-y-[10px]">
                <h2 className={`text-base font-bold ${productId === '1115227' ? "text-white" : "text-[#7e868b]"}  text-center`}>Αρχική τιμή: <span className={`${productId === '1115227' ? "text-white" : "text-[#ff0004]"} text-[25px] line-through font-normal`}>{fullPrice}€</span></h2>
                <h2 className={`text-base font-bold ${productId === '1115227' ? "text-white" : "text-[#7e868b]"} text-center`}>Τελική τιμή: <span className={`${productId === '1115227' ? "text-white" : "text-[#219700]"} text-[30px]`}>{Number.parseInt(productPrice).toFixed(0)}€</span></h2>
            </div>
            <p className={`text-xl font-bold text-center whitespace-pre-line ${productId === '1115227' ? "text-white" : "text-deep-orange"}`}>{Math.round(discountPercentage)}% ΕΚΠΤΩΣΗ!</p>
            <ul className="list-image-[url(/rsz_check_1-p-130x130q80.png)] list-inside space-y-5">
                {['Μέγιστα αποτελέσματα', 'Γρήγορη παράδοση', 'Ασφαλείς πληρωμές με κάρτα', Number.parseInt(productPrice).toFixed(0) < 50 ? "Επιβάρυνση μεταφορικών για παραγγελίες κάτω των €50" : "Δωρεάν μεταφορικά για παραγγελίες άνω των €50", 'Εργαστηριακά ελεγμένο προϊόν', 'Παρασκευάζεται στην Κύπρο'].map((item, index) => (
                    <li key={index} className={`text-base font-bold ${productId === '1115227' ? "text-white" : "text-[#7e868b]"}`}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
