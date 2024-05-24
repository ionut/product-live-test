import Image from 'next/image'
import React from 'react'

const IngredientsSection = () => {
    return (
        <section className="bg-leaf background-leaf">
            <div className="container py-[100px]">
                <div className="grid grid-cols-[60%_40%] gap-5 items-center">
                    <div className="space-y-5">
                        <h4 className="text-deep-orange text-[26px] leading-[30px] font-bold">Το Mood Booster μεταμορφώνει την ημέρα σας με ενέργεια!</h4>
                        <ul className="space-y-5">
                            <li className="text-[#7e868b] text-xl">Το Mood Booster και οι ιδιότητές τους:</li>
                            <li className="text-[#7e868b] text-xl">Η <strong>ταυρίνη</strong> είναι γνωστή για την ικανότητά της να αυξάνει την ενέργεια.</li>
                            <li className="text-[#7e868b] text-xl">Το <strong>τζίντζερ</strong> ενδυναμώνει το ανοσοποιητικό σύστημα.</li>
                            <li className="text-[#7e868b] text-xl">Η <strong>καφεΐνη</strong> μπορεί να μειώσει την κόπωση, το άγχος και την υπνηλία.</li>
                            <li className="text-[#7e868b] text-xl">Το <strong>γκουαρανά</strong> ενισχύει την μνήμη και την συγκέντρωση, αποτρέπει την γύρανση του δέρματος και αυξάνει τον μεταβολισμό.</li>
                            <li className="text-[#7e868b] text-xl">Η <strong>βιταμίνη</strong> C είναι επίσης το κλειδί για ένα δυνατό και σε καλή λειτουργία ανοσοποιητικό σύστημα.</li>
                            <li className="text-[#7e868b] text-xl"><strong>Η</strong> λύψη <strong>μυο</strong>-ινοσιτόλης βοηθά στη μείωση αγχώδους διαταραχής, υπερφαγίας και κατάθλιψης.</li>
                            <li className="text-[#7e868b] text-xl">Οι <strong>βιταμίνες του συμπλέγματος Β</strong> παίζουν καθοριστικό ρόλο στην πρόληψη και τη διαχείριση ενός υγιούς μεταβολισμού, ενισχύουν το νευρικό σύστημα βελτιώνοντας τη νοητική επίδοση, την ψυχολογία και επίσης μειώνουν την κόπωση και τη σωματική εξάντληση.</li>
                            <li className="text-[#7e868b] text-xl">Ο <strong>ψευδάργυρος</strong> βοηθά στην υγεία του <strong>δέρματος,</strong> των <strong>μαλλιών</strong> και των <strong>οστών</strong>, στη διατήρηση των φυσιολογικών επιπέδων <strong>τεστοστερόνης</strong> στο αίμα, και στη διατήρηση της φυσιολογικής <strong>όρασης</strong></li>
                            <li className="text-[#7e868b] text-xl"><strong>Αποκλειστική προσφορά. Λάβετε το Mood Booster με έκπτωση 50% σήμερα - η λύση σας για μια δυναμική και χαρούμενη ύπαρξη βρίσκεται μόλις ένα φακελάκι μακριά.</strong></li>
                        </ul>
                    </div>
                    <Image src="/ingredients_1.webp" alt="Finistress Ingredients" width={450} height={316} />
                </div>
                <div className="border-[5px] border-[#b35e00] border-dashed bg-deep-orange mt-[100px] p-10">
                    <h4 className="text-center text-white text-[26px] leading-[32px] font-bold">Εκατοντάδες άνθρωποι έχουν βιώσει εκπληκτικά αποτελέσματα με το Mood Booster!</h4>
                </div>
            </div>
        </section>
    )
}

export default IngredientsSection