import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className="bg-red">
            <div className="container py-[10px]">
                <div className="flex">
                    <p className="text-base text-center text-white font-bold lg:text-left">ΑΓΟΡΑΣΤΕ TO FINISTRESS ΜΕ 50% ΕΚΠΤΩΣΗ! ΠΕΡΙΟΡΙΣΜΕΝΕΣ ΠΡΟΜΗΘΕΙΕΣ ΜΟΝΟ!</p>
                    <Link href="#test" className=" bg-white rounded-[20px] flex items-center px-[10px]">
                        <span className="text-red font-bold text-xs">ΠΑΡΑΓΓΕΙΛΕ ΤΩΡΑ</span>
                        <Image alt="Hand Image" src="/decree_1decree.webp" width={25} height={25} /></Link>
                </div>
            </div>
        </nav>
    )
}
