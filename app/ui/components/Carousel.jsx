"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
export const Carousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 7000 })])
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <div className="grid grid-cols-3">
                        <Image src="/gallery-5_1gallery-5.webp" alt="Banana" width={500} height={281} className="transition ease-in-out delay-200 hover:scale-125" />
                        <Image src="/gallery-4_1gallery-4.webp" alt="Moodbooster Banana & Strawberry" width={500} height={281} className="transition ease-in-out delay-200 hover:scale-125" />
                        <Image src="/gallery-6_1gallery-6.webp" alt="Strawberry" width={500} height={281} className="transition ease-in-out delay-200 hover:scale-125" />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="grid grid-cols-3">
                        <Image src="/gallery-2_1gallery-2.webp" alt="Root" width={500} height={281} className="transition ease-in-out delay-200 hover:scale-[1.2]" />
                        <Image src="/gallery-1_1gallery-1.webp" alt="Moodbooster Banana & Strawberry" width={500} height={281} className="transition ease-in-out delay-200 hover:scale-125" />
                        <Image src="/gallery-3_1gallery-3.webp" alt="Coffee" width={500} height={281} className="transition ease-in-out delay-200 hover:scale-125" />
                    </div></div>
            </div>
        </div>
    )
}
