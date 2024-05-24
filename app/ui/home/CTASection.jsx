import { sen } from '@/app/styles/fonts'
import React from 'react'
import { PacksButton } from '../components/Buttons'

const CTASection = ({ searchParams }) => {
    return (
        <section className="bg-moodbooster background-moodbooster bg-[#8cb12e]">
            <div className="container py-[100px]">
                <h3 className="text-[26px] leading-[32px] font-bold text-white text-center mt-5 mb-[10px]">Ανυψώστε την ενεργειά σας και τονώστε το πνεύμα σας με το</h3>
                <h1 className={`${sen.className} text-[113px] leading-[95px] text-white font-black uppercase text-shadow-lg mb-[35px] text-center whitespace-nowrap`}>Mood booster!</h1>
                <p className="text-xl text-white text-center">Δοκιμάστε τώρα το δημοφιλέστερο προϊόν μας για να νιώσετε τη διαφορά!</p>
                <PacksButton searchParams={searchParams} extraStyle={'mt-5 max-w-[500px] mx-auto bg-white text-deep-orange'} >ΠΑΡΑΓΓΕΙΛΕ ΤΩΡΑ ➤</PacksButton>
            </div>
        </section>
    )
}

export default CTASection