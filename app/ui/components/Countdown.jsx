import { sen } from '@/app/styles/fonts';
import React, { useState } from 'react'

export const Countdown = () => {
    const [minutes, setMinutes] = useState("");
    const [hours, setHours] = useState("");
    const [days, setDays] = useState("");
    // Set the target date and time
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January"];

    const d = new Date();
    const monthName = month[d.getMonth() + 1];
    const target_date = new Date(`${monthName} 1, 2024 23:59:59`).getTime();

    setInterval(function () {
        // Get the current date and time
        const current_date = new Date().getTime();

        // Calculate the remaining time in milliseconds
        const distance = target_date - current_date;
        // Calculate the remaining days, hours, minutes, and seconds
        const day = 1000 * 60 * 60 * 24;
        const hour = 1000 * 60 * 60;
        const minute = 1000 * 60;
        // Add the ID to your HTML/Webflow text elements
        setDays(Math.floor(distance / day))
        setHours(Math.floor((distance % day) / hour))
        setMinutes(Math.floor((distance % hour) / minute))
        // Check if the countdown is complete
    }, 1000);
    return (
        <div className="grid grid-cols-3 w-full">
            <div className="space-y-[5px]">
                <h3 className={`${sen.className} text-center text-shadow-xl text-white text-[113px] leading-[95px] font-black`}>{days}</h3>
                <p className="text-center text-white text-xl font-bold">Ημέρες</p>
            </div>
            <div className="space-y-[5px]">
                <h3 className={`${sen.className} text-center text-shadow-xl text-white text-[113px] leading-[95px] font-black`}>{hours < 10 ? "0" : ""}{hours}</h3>
                <p className="text-center text-white text-xl font-bold">Ωρες</p>
            </div>
            <div className="space-y-[5px]">
                <h3 className={`${sen.className} text-center text-shadow-xl text-white text-[113px] leading-[95px] font-black`}>{minutes < 10 ? "0" : ""}{minutes}</h3>
                <p className="text-center text-white text-xl font-bold">Λεπτά</p>
            </div>
        </div>
    )
}
