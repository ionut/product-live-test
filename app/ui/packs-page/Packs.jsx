import { ListProducts } from '@/app/lib/data';
import React from 'react'
import { ProductCard } from './ProductCard';

export const Packs = async ({ searchParams }) => {
    const data = await ListProducts();
    const products = data.products.filter(item => item.name_en.includes("Mood Booster"));

    return (
        <div className="grid grid-cols-3 gap-5">
            {products.map(item => {
                const { id } = item;
                return <ProductCard key={id} id={id} searchParams={searchParams} />
            })}
        </div>
    )
}
