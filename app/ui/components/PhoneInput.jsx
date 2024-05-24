"use client"
import React from 'react'
import 'intl-tel-input/build/css/intlTelInput.css';
import IntlTelInput from 'intl-tel-input/react';
export const PhoneInput = () => {
    return (
        <IntlTelInput
            // any initialisation options from the readme will work here
            inputProps={{ name: "phone_no", id: "phone", required: true, className: "h-10 text-base w-full" }}
            initOptions={{
                initialCountry: "gr",
                onlyCountries: ["gr", "cy"],
                autoPlaceholder: "polite",
                placeholderNumberType: "MOBILE",
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js",
            }}
        />
    )
}
