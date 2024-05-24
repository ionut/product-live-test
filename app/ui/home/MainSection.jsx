"use client";
import { sen } from '@/app/styles/fonts'
import Image from 'next/image'
import React from 'react'
import { Reveal } from '../framer-motion/Reveal';
import { PacksButton } from '../components/Buttons';
export const MainSection = ({ searchParams }) => {

    return (
        <section className="bg-mainSection bg-deep-pink background-main">
            <div className="container py-10">
                <div className="grid grid-cols-1 gap-[10px] justify-center items-center lg:grid-cols-[1fr_auto]">
                    <div className="flex flex-col items-center lg:items-start">
                        <Image alt="Finistress Logo" src="/white-logo.svg" width={200} height={30} className="mb-[50px]" />
                        <h4 className="text-[26px] leading-[35px] font-bold text-white text-shadow-sm text-center lg:text-left">Συμπλήρωμα διατροφής για τόνωση της ενέργειας</h4>
                        <h1 className={`${sen.className} text-[113px] leading-[95px] text-white font-black uppercase text-shadow-lg mb-[35px] text-center lg:text-left`}>Mood Booster</h1>
                        <p className="text-xl font-normal text-white text-center lg:text-left">O σύμμαχός σας για τη βελτίωση της διάθεσης, τη μείωση του στρες, συμβάλλει στη φυσιολογική λειτουργία του ανοσοποιητικού συστήματος και της ρύθμισης της ορμονικής δραστηριότητας, στη μείωση της κούρασης και της κόπωσης.</p>
                        <div className="grid grid-cols-3 gap-[10px] py-10">

                            <Reveal
                            >
                                <Image src="/photo-1_1photo-1.webp" alt="Fruit" width={108} height={108} className="rounded-[100px] border-[4px] border-white shadow-mainImg" />
                                <p className="text-center text-xl font-normal text-white">Γεύση μπανάνα & φράουλα</p>
                            </Reveal>
                            <Reveal>
                                <Image src="/photo-2_1photo-2.webp" alt="Coffee" width={108} height={108} className="rounded-[100px] border-[4px] border-white shadow-mainImg" />
                                <p className="text-center text-xl font-normal text-white">Περιέχει Ταυρίνη & Καφεΐνη </p>
                            </Reveal>
                            <Reveal>
                                <Image src="/photo-3_1photo-3.webp" alt="Root" width={108} height={108} className="rounded-[100px] border-[4px] border-white shadow-mainImg" />
                                <p className="text-center text-xl font-normal text-white">Περιέχει Βιταμίνες Β & Τζίνσενγκ</p>
                            </Reveal>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[10px]">
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
