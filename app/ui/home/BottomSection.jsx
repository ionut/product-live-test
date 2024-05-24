"use client"
import Image from 'next/image'
import React from 'react'
import { PacksButton } from '../components/Buttons'
import { sen } from '@/app/styles/fonts'
import { Countdown } from '../components/Countdown'

export const BottomSection = ({ searchParams }) => {
    return (
        <section className="bg-mainSection bg-deep-pink background-main">
            <div className="container py-10">
                <div className="grid grid-cols-1 gap-[10px] justify-center items-center lg:grid-cols-2">
                    <div className="flex flex-col items-center lg:items-start">
                        <Image src="/Finistress-product_1.webp" alt="Mood Booster Pack" width={367} height={336} />
                        <div className="flex items-center justify-between w-full gap-[5px]">
                            <div>
                                <p className="text-xl font-bold text-white">Τιμή:</p>
                            </div>
                            <div>
                                <p className={`${sen.className} text-[100px] leading-[100px] text-white font-bold uppercase text-shadow-md`}>39€</p>
                                <p className={`${sen.className} text-[50px] leading-[20px] text-red line-through text-center font-bold uppercase text-shadow-xs`}>78€</p>
                            </div>
                            <div>
                                <p className="bg-[#3baa2e] shadow-green p-[10px] text-[20px] leading-[20px] font-bold rounded-[20px] text-white text-center">50% έκπτωση</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[10px]">
                        <h4 className="text-[40px] leading-[50px] font-bold text-white text-center">Περιορισμένη προσφορά!</h4>
                        <h6 className="text-[30px] leading-[40px] font-bold text-white text-center">Αγορά με έκπτωση 50%! Η προσφορά θα λήξει μετά:</h6>
                        <Countdown />
                        <p className="text-base text-white text-center">*Ολοκληρώστε την παραγγελία μας τώρα πριν να είναι πολύ αργά!</p>
                        <div className="flex items-center gap-[10px]">
                            <Image src="/rating.png" alt='Star Ratings' width={150} height={25} className='grayscale brightness-[200%]' />
                            <p className='text-white text-base font-bold text-center'>Βαθμολογία 4,9/5 από 1500+ Ευτυχισμένους πελάτες!</p>
                        </div>
                        <PacksButton searchParams={searchParams} extraStyle={'bg-white text-deep-orange'} >ΠΑΡΑΓΓΕΙΛΕ ΤΩΡΑ ➤</PacksButton>
                        <div className="flex flex-col items-center gap-[5px]">
                            <p className="text-base text-white font-bold">100% Ασφαλής συναλλαγή SSL</p>
                            <Image src="/badges.png" alt="Badges" width={203} height={25} />
                            <p className="text-base text-white font-bold">Πολιτική επιστροφής χρημάτων 60 ημερών</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
