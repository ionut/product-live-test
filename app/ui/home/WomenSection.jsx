import { montserrat } from '@/app/styles/fonts'
import React from 'react'

export const WomenSection = () => {
    return (
        <section className="bg-womenSectionTransparent background-woman lg:bg-womenSection lg:bg-no-repeat lg:bg-[length:600px] lg:bg-[-10%_100%]">
            <div className="container py-[60px]">
                <div className='border-t-[5px] border-[#f78404]'>
                    <h1 className="text-[40px] leading-[50px] font-bold text-[#f78404] text-center mt-10">Το Mood Booster είναι το αποτέλεσμα πολυετούς έρευνας από κορυφαίους διατροφολόγους.</h1>
                    <h3 className="text-xl font-bold text-[#7e868b] text-center mt-5">Ανακτήστε τον έλεγχο της ενέργειας και της διάθεσής σας με το Mood Booster.</h3>
                </div>
                <div className="grid grid-cols-[auto_70%] mt-10">
                    <div className='col-start-2 space-y-5'>
                        <p className="text-xl font-normal text-[#7e868b]"><span className="text-[40px] leading-[50px] font-bold text-[#f78404]">Το Mood Booster</span> είναι συμπλήρωμα διατροφής που συσκευάζεται σε φακελάκι 5g. Περιέχει συνδυασμό φυσικών ενεργειακών εκχυλισμάτων όπως ταυρίνη, καφεΐνη, τζίνσενγκ, λυσίνη. Εμπλουτισμένο με ψευδάργυρο, βιταμίνη C, βιταμίνες του συμπλέγματος Β οι οποίες βοηθούν άμεσα κατα το στρές που προέρχεται από σωματική η ψυχολογική κόπωση, προσφέροντας γρήγορη ανάκαμψη, ευδιαθεσία και ενέργεια καθώς και αύξηση της αδρεναλίνης.</p>
                        <p className="text-xl font-normal text-[#7e868b]"><span className="text-[40px] leading-[50px] font-bold text-[#f78404]">Το Mood Booster</span> είναι ο σύμμαχός σας για τη βελτίωση της διάθεσης, τη μείωση του στρες και την υποστήριξη της γρήγορης ανάκτησης ενέργειας, καθιστώντας το μια ιδανική, φυσική επιλογή για όσους θέλουν να βελτιώσουν τα καθημερινά τους επίπεδα ενέργειας. Χαρίζουν πολλά οφέλη στον οργανισμό, διατηρεί την υγεία του δέρματος, των μαλλιών και του ανοσοποιητικού συστήματος. Συμβάλει στην ενδυνάμωση των ανθρώπινων οστών, την μείωση της κούρασης και την κόπωσης και τη φυσιολογική λειτουργία του νευρικού συστήματος. Παράλληλα, αυξάνεται την οξείδωση του λίπους, κάτι που σημαίνει καλύτερη καύση του λίπους κατά τη διάρκεια της</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
