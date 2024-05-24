"use client"
import Image from 'next/image'
import React from 'react'
import { Reveal } from '../framer-motion/Reveal';

export const ProductDetails = ({ name, image_url, productPrice }) => {
    const packagesName = name.split(" - ").at(1);
    const packagesNumber = packagesName.split(" ").at(0);
    // data populated on ui
    const singlePriceDeclared = 39;
    const productsNumberTotal = Number.parseInt(packagesNumber) * 2;
    const fullPrice = singlePriceDeclared.toFixed(0) * productsNumberTotal;
    const discountPercentage = (Number.parseInt(productPrice).toFixed(0) / fullPrice) * 100;
    const pricePerPackAfterDiscount = Math.round(Number.parseInt(productPrice).toFixed(0) / packagesNumber);
    return (
        <div>
            <div className="h-[150px] border-b-[1px] border-white p-5">
                <h2 className="text-[30px] leading-[35px] font-bold text-white">Δημιούργησε μια εξατομικευμένη προσφορά</h2>
                <h6 className="text-[20px] leading-[30px] text-white">Τα προϊόντα σας κρατούνται για 60 λεπτά.</h6>
            </div>
            <div className="px-2 py-5 space-y-5">
                <div className="grid grid-cols-4 gap-4">
                    <Reveal>
                        <Image src={image_url} alt={name} width={71} height={55} className="col-span-1 mx-auto" />
                    </Reveal>
                    <div className="flex flex-col col-span-2">
                        <h4 className="text-[30px] leading-[35px] text-white font-bold">{packagesName}</h4>
                        <p className="text-base text-white">ΠΡΟΣΦΟΡΑ ΓΙΑ ΝΕΟΥΣ ΠΕΛΑΤΕΣ</p>
                        <p className="text-base text-white">134 προϊόντα έχουν ήδη σταλεί τις τελευταίες 24 ώρες.</p>
                    </div>
                    <div className="flex flex-col items-end col-span-1">
                        <p className="text-base text-white">Ποσότητα:</p>
                        <p className="text-xl text-white font-bold">{packagesNumber}</p>
                        <p className="text-base text-white line-through whitespace-nowrap">{fullPrice.toFixed(2)} €</p>
                        <p className="text-xl text-white font-bold whitespace-nowrap">{productPrice} €</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <Reveal>
                        <Image src="/icon-1_1.webp" alt={name} width={50} height={50} className="col-span-1 mx-auto" />
                    </Reveal>
                    <div className="flex flex-col col-span-2">

                        <p className="text-base text-white font-bold">Παράδοση με διακριτική συσκευασία</p>
                        <p className="text-base text-white">Γρήγορη αποστολή</p>
                    </div>
                    <div className="flex flex-col col-span-1">
                        <p className="text-base text-white line-through text-right">4,90 €</p>
                        <p className="text-sm text-white text-right">Xωρίς<br />Χρέωση</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <Reveal>
                        <Image src="/icon-2_1.webp" alt={name} width={50} height={50} className="col-span-1 mx-auto" />
                    </Reveal>
                    <div className="flex flex-col col-span-2">

                        <p className="text-base text-white font-bold">{discountPercentage.toFixed(0)}% Έκπτωση</p>
                        <p className="text-base text-white">Περιορισμένα Αποθέματα!</p>
                    </div>
                    <div className="flex flex-col col-span-1">
                        <p className="text-base text-white line-through text-right">00,00 €</p>
                        <p className="text-sm text-white text-right">Xωρίς<br />Χρέωση</p>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <Image src="/shield_1shield.webp" alt="Shield" width={30} height={30} />
                            <div className="flex flex-col">
                                <p className="text-base text-white">
                                    +25.000 πελάτες μας εμπιστεύονται
                                </p>
                                <div className="flex gap-4 items-start">
                                    <p className="text-base text-white">
                                        4.9/5
                                    </p>
                                    <div className="flex gap-1">
                                        {Array.from({ length: 4 }, (v, i) => {
                                            return <Image key={i} src="/star_1star.webp" alt="rating start" width={20} height={20} />
                                        })}
                                        <Image src="/half-star_1half-star.webp" alt="rating start" width={20} height={20} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 items-start'>
                            <Image src="/padlock_1padlock.webp" alt="Lock" width={15} height={15} className="invert" />
                            <p className="text-xs text-white font-bold">100% ασφαλείς συναλλαγές SSL.</p>
                        </div>
                        <Image src="/badges_1badges.webp" alt="Badges" width={203} height={25} />
                    </div>
                    <div className="space-y-2">
                        <h6 className="text-[20px] leading-[30px] text-white font-bold text-right ">Σύνολο για: {packagesName}</h6>
                        <div className="flex items-center justify-center bg-[#f2f2f2] p-[10px] rounded-[10px] gap-4">
                            <h4 className="text-[#fd0000] text-lg line-through font-bold">{fullPrice.toFixed(2)} €</h4>
                            <h3 className="text-[#3baa2e] text-[23px] leading-[20px] font-bold">{productPrice} €</h3>
                        </div>
                        <p className="text-sm text-white text-right">Δηλαδή εξοικονόμηση {(fullPrice - productPrice).toFixed(2)} €</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-[25px] leading-[40px] text-white text-center font-bold">Μέθοδος πληρωμής</h2>
                    <div className="flex flex-wrap justify-center">
                        <Image src="/g-pay.webp" alt="Google Pay" width={80} height={25} />
                        <Image src="/apple-pay.webp" alt="Apple Pay" width={80} height={25} />
                        <Image src="/visa-pay.webp" alt="Visa Pay" width={80} height={25} />
                        <Image src="/mastercard-pay.webp" alt="Mastercard Pay" width={80} height={25} />
                        <Image src="/paypal-pay.webp" alt="Paypal Pay" width={80} height={25} />
                    </div>
                </div>
            </div>
            <div className="bg-[#3baa2e]">
                <h2 className="font-bold text-xl py-[10px] text-center text-white">Πολιτική επιστροφής χρημάτων 60 ημερών</h2>
            </div>
        </div >
    )
}
