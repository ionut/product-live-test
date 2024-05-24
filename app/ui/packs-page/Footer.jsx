import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <div>
            <h3 className="text-white text-[28px] leading-[40px] text-center font-bold mb-[10px]">Πολιτική επιστροφής χρημάτων 60 ημερών!</h3>
            <div className="rounded-[20px] bg-white max-w-[400px] mx-auto shadow-rating p-[10px]">
                <Image src="/rating-greek.png" width={200} height={66} alt="Rating Products" className="block mx-auto" />
            </div>
        </div>
    )
}
