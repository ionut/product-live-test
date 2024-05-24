import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <section>
            <div className="container py-16">
                <p className="text-[#7e868b] text-base">FDA : Αυτές οι δηλώσεις δεν έχουν αξιολογηθεί από την Υπηρεσία Τροφίμων και Φαρμάκων. Αυτό το προϊόν δεν προορίζεται για τη διάγνωση, τη θεραπεία, τη θεραπεία ή την πρόληψη οποιασδήποτε ασθένειας. Οι πληροφορίες που παρέχονται σε αυτόν τον ιστότοπο είναι μόνο για ενημερωτικούς σκοπούς και δεν προορίζονται ως υποκατάστατο της συμβουλής του γιατρού σας ή άλλου επαγγελματία υγείας ή οποιασδήποτε πληροφορίας που περιέχεται επάνω ή σε οποιαδήποτε ετικέτα ή συσκευασία προϊόντος. Δεν πρέπει να χρησιμοποιείτε τις πληροφορίες σε αυτόν τον ιστότοπο για διάγνωση ή θεραπεία οποιουδήποτε προβλήματος υγείας ή για συνταγογράφηση οποιουδήποτε φαρμάκου ή άλλης θεραπείας. Θα πρέπει να συμβουλευτείτε έναν επαγγελματία υγείας πριν ξεκινήσετε οποιαδήποτε δίαιτα, άσκηση ή πρόγραμμα συμπληρωμάτων, πριν πάρετε οποιοδήποτε φάρμακο ή εάν έχετε ή υποψιάζεστε ότι μπορεί να έχετε πρόβλημα υγείας.</p>
                <div className="flex justify-between border-t-[1px] mt-16 pt-8 border-t-untitled-ui-gray200">
                    <p className="text-[#7e868b] text-base">© 2024 Finistress. Ολα τα δικαιώματα διατηρούνται.</p>
                    <ul className="flex gap-4">
                        <li className="text-[#7e868b] text-base"><Link href="">COA</Link></li>
                        <li className="text-[#7e868b] text-base"><Link href="">Πιστοποιητικό</Link></li>
                        <li className="text-[#7e868b] text-base"><Link href="/terms-and-conditions">Οροι</Link></li>
                        <li className="text-[#7e868b] text-base"><Link href="/privacy-policy">Μυστικότητα</Link></li>
                        <li className="text-[#7e868b] text-base"><Link href="">Πλήρης ετικέτα</Link></li>

                    </ul>
                </div>
            </div>
        </section>
    )
}
