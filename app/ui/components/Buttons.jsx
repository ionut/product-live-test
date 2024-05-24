"use client";
import Link from 'next/link'
import React from 'react'

function getParams(searchParams) {
    const params = Object.entries(searchParams).map(([key, value]) => {
        return `${key}=${value}`
    }).join('&');

    return params
}

export const PacksButton = ({ searchParams, extraStyle, children }) => {
    const parameters = getParams(searchParams);
    return (
        <Link href={`/packs-page/?${parameters}`} className={`block w-full rounded-[20px] text-center py-5 text-[30px] leading-[30px] font-bold  transition ease-in-out delay-150 hover:shadow-hover hover:scale-110  ${extraStyle ? extraStyle : ''}`}>{children}</Link>
    )
}
export const CheckoutButton = ({ id, searchParams, extraStyle, children }) => {
    const parameters = getParams(searchParams);

    return (
        <Link href={`/checkout-page/${id}/?${parameters}`} className={`block w-full rounded-[20px] text-center py-5 text-[30px] leading-[30px] font-bold  transition ease-in-out delay-150 hover:shadow-hover hover:scale-110  ${extraStyle ? extraStyle : ''}`}>{children}</Link>
    )
}
