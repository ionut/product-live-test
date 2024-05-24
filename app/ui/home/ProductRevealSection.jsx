"use client";
import Image from 'next/image';
import React from 'react'
import { useScroll } from "framer-motion";
import { RevealHorizontally } from '../framer-motion/RevealHorizontally';

export const ProductRevealSection = () => {
    const { scrollY } = useScroll();


    return (
        <section className="bg-grass  background-grass">
            <div className="container py-[60px]">
                <h1 className="text-white font-bold text-[40px] leading-[50px] text-center my-[10px]">ΠΑΡΑΤΗΡΗΣΤΕ ΤΑ ΠΑΡΑΚΑΤΩ ΟΦΕΛΗ ΧΑΡΗ ΣΤΟ MOOD BOOSTER!</h1>
                <div className="grid grid-cols-3 grid-flow-row items-center gap-y-[60px] py-[60px]">
                    <RevealHorizontally direction={-75}>

                        <p className="absolute -top-[10%] right-[10%] size-[60px] bg-deep-pink text-white flex justify-center items-center border-[6px] border-deep-orange rounded-[50px] shadow-numbers text-[30px] font-bold leading-[20px]">1</p>
                        <h5 className="text-[#f78404] text-[26px] leading-[30px] font-bold mb-5">Ενισχυμένη συναισθηματική ευημερία</h5>
                        <p className="text-[#565757] text-xl">H ενισχυμένη συναισθηματική ευημερία συμβάλει στην αύξηση της ικανότητας αντιμετώπισης προβλημάτων, την αυτοεκτίμηση, την απόδοση, την επίτευξη στόχων και αύξησης της απόδοσης.</p>
                    </RevealHorizontally >
                    <Image src="/Finistress-product-2_1.webp" alt="Mood Booster Banana&Straweberry" width={500} height={457} className="row-span-2" />
                    <RevealHorizontally direction={75}>
                        <p className="absolute -top-[10%] left-[10%] size-[60px] bg-deep-pink text-white flex justify-center items-center border-[6px] border-deep-orange rounded-[50px] shadow-numbers text-[30px] font-bold leading-[20px]">2</p>
                        <h5 className="text-[#f78404] text-[26px] leading-[30px] font-bold mb-5">Aνακούφιση απο το άγχους</h5>
                        <p className="text-[#565757] text-xl">Το Mood Booster όχι μόνο ηρεμεί το μυαλό και το σώμα σας, αλλά προσφέρει διαρκή χαλάρωση που εκτείνεται πολύ μετά την αρχική σας λήψη.</p>
                    </RevealHorizontally >
                    <RevealHorizontally direction={-75}>
                        <p className="absolute -top-[10%] right-[10%] size-[60px] bg-deep-pink text-white flex justify-center items-center border-[6px] border-deep-orange rounded-[50px] shadow-numbers text-[30px] font-bold leading-[20px]">3</p>
                        <h5 className="text-[#f78404] text-[26px] leading-[30px] font-bold mb-5">Διαρκής ηρεμία και ειρήνη</h5>
                        <p className="text-[#565757] text-xl">Απολαύστε στιγμές γαλήνης και ειρήνης, ενδυναμώστε τον εαυτό σας και τους γύρω σας για να περιηγηθείτε στις προκλήσεις της ζωής με χάρη.</p>
                    </RevealHorizontally >
                    <RevealHorizontally direction={75}>
                        <p className="absolute -top-[10%] left-[10%] size-[60px] bg-deep-pink text-white flex justify-center items-center border-[6px] border-deep-orange rounded-[50px] shadow-numbers text-[30px] font-bold leading-[20px]">4</p>
                        <h5 className="text-[#f78404] text-[26px] leading-[30px] font-bold mb-5">Αυξημένη συναισθηματική ανθεκτικότητα</h5>
                        <p className="text-[#565757] text-xl">Απέκτησε την ικανότητα να ανακάμπτεις από τα αρνητικά συναισθήματα και να προσαρμόζεσαι στις αλλαγές και στις αγχωτικές εμπειρίες.</p>
                    </RevealHorizontally >
                </div>
            </div>
        </section>
    )
}
