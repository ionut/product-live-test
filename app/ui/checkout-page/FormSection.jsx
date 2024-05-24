
import React from 'react'
import { CreateBuyUrl } from '@/app/lib/createBuyUrl'
import Image from 'next/image'
import { permanentRedirect } from 'next/navigation'
import moment from 'moment';
import { PhoneInput } from '../components/PhoneInput';

export const FormSection = ({ productId, productPrice, searchParams }) => {
    const transaction_id = Object.entries(searchParams).map(([key, value]) => key === "transaction_id" && value);

    async function submitForm(productId, formData) {
        "use server"
        const rawFormData = {
            salutation: formData.get("salutation"),
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
            email: formData.get("email"),
            street: formData.get("street"),
            zipcode: formData.get("zipcode"),
            city: formData.get("city"),
            country: formData.get("country_code"),
            phone_no: formData.get("phone_no")
        }
        const buyer = Object.entries(rawFormData).map(item => {
            return `buyer[${item.at(0)}]=${item.at(1)}`
        }).join('&');

        const tracking = `tracking[trackingkey=${transaction_id[0]}`;

        const buyUrl = await CreateBuyUrl(productId, buyer, tracking);

        if (buyUrl) {
            permanentRedirect(buyUrl)
        }
    }
    const submitFormUser = submitForm.bind(null, productId);
    const deliveryDate = moment().add(14, 'days').calendar();;

    return (
        <div>
            <div className="h-[150px] border-b-[1px] border-white p-5">
                <Image src="/shield_1shield.webp" alt="Security Shield" width={30} height={30} className="float-left mr-[10px]" />
                <h2 className="text-[30px] leading-[35px] font-bold text-white">Πληροφορίες Παραγγελίας</h2>
            </div>
            <form action={submitFormUser} className="px-2 py-5 space-y-2">
                <h3 className="text-[20px] leading-[40px] font-bold text-white border-b-[1px] border-white">Συμπληρώστε τη διεύθυνση παράδοσης</h3>
                <div className="flex gap-5">
                    <div className="flex gap-2" >
                        <input type="radio" id="female" name="salutation" value="F" required />
                        <label htmlFor="female" className="text-white text-sm font-bold">κυρία</label>
                    </div>
                    <div className="flex gap-2">
                        <input type="radio" id="men" name="salutation" value="M" required />
                        <label htmlFor="men" className="text-white text-sm font-bold">Κύριε</label>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="firstname" className="text-white text-xl font-bold">Ονομα</label>
                        <input id="firstName" type="text" name="first_name" placeholder="Ονομα" className="h-10 pl-3 text-base" required ></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="lastname" className="text-white text-xl font-bold">Ονομ</label>
                        <input id="lastname" type="text" name="last_name" placeholder="Ονομ" className="h-10 pl-3 text-base" required ></input>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white text-xl font-bold">Email</label>
                    <input id="email" type="email" name="email" placeholder="Email" className="h-10 pl-3 text-base" required ></input>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="street" className="text-white text-xl font-bold">Διεύθυνση</label>
                    <input id="street" type="text" name="street" placeholder="Διεύθυνση" className="h-10 pl-3 text-base" required ></input>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="zipcode" className="text-white text-lg font-bold">Ταχυδρομικός κώδικας</label>
                        <input id="zipcode" type="number" name="zipcode" placeholder="Ταχυδρομικός κώδικας" className="h-10 pl-3 text-base" required ></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="city" className="text-white text-xl font-bold">Ville</label>
                        <input id="city" type="text" name="city" placeholder="Ville" className="h-10 pl-3 text-base" required ></input>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="country" className="text-white text-xl font-bold">Πληρώνει</label>
                        <select id="country" name="country_code" className="h-10 pl-3 text-base" required>
                            <option value disabled>-- Χώρα --</option>
                            <option value="GR">Ελλάδα</option>
                            <option value="CY">Κύπρος</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-white text-xl font-bold">Τηλέφωνο</label>
                        <PhoneInput />
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-2 justify-stretch justify-items-stretch">
                    <div>
                        <h3 className="text-[20px] leading-[40px] font-bold text-white">Τρόπος παράδοσης</h3>
                        <p className="text-sm text-white">Παραδίδεται σε εσάς από</p>
                        <p className="text-sm text-white font-bold">{deliveryDate}.</p>
                        <p className="text-sm text-white">{productPrice < 50 ? "6€ Αποστολή" : "Δωρεάν μεταφορά"}</p>
                    </div>
                    <div className="place-self-end w-full space-y-2">
                        <button type="submit" className="bg-deep-orange rounded-[20px] text-[14px] leading-[28px] font-bold h-14 w-full text-white flex justify-center items-center">Προχωρήστε στην πληρωμή</button>
                        <div className='flex gap-2 items-start'>
                            <Image src="/padlock_1padlock.webp" alt="Lock" width={15} height={15} className="invert" />
                            <p className="text-sm text-white font-bold">100% ασφαλής πληρωμή</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
