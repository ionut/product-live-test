import React from 'react'
import { PacksButton } from '../components/Buttons'

export const DoctorSection = ({ searchParams }) => {
    return (
        <section className="bg-doctor background-doctor">
            <div className="container py-[150px]">
                <div className="grid grid-cols-[auto_70%] mt-10">
                    <div className='col-start-2 space-y-5'>
                        <h1 className="text-[40px] leading-[50px] font-bold text-white text-center mt-10">Mood Booster  - είναι απλό και αποτελεσματικό!</h1>
                        <p className="text-xl font-normal text-white text-center">Το MOOD BOOSTER είναι ο σύμμαχός σας για τη βελτίωση της διάθεσης, τη μείωση του στρες και την υποστήριξη της γρήγορης ανάκτησης ενέργειας, καθιστώντας το μια ιδανική, φυσική επιλογή για όσους θέλουν να βελτιώσουν τα καθημερινά τους επίπεδα ενέργειας χωρίς δυσμενείς επιπτώσεις. Αυτή η ολοκληρωμένη φόρμουλα όχι μόνο ενισχύει την άμεση ενέργεια, αλλά συμβάλλει επίσης σε μακροπρόθεσμα οφέλη για την υγεία, προωθώντας έναν πιο ζωντανό και δραστήριο τρόπο ζωής.</p>
                        <p className="text-xl font-bold text-white text-center">Χρήση</p>
                        <p className="text-xl font-normal text-white text-center">Δοσολογία: 1-2 φακελίσκοι την ημέρα κατά προτίμηση 1½ ώρα μετά το φαγητό. (30 φακελάκια με νόστιμη γεύση μπανάνα φράουλα)</p>
                        <PacksButton searchParams={searchParams} extraStyle={'mt-5  bg-deep-orange text-white'} >ΠΑΡΑΓΓΕΙΛΕ ΤΩΡΑ ➤</PacksButton >
                    </div>
                </div>
            </div>
        </section>
    )
}
