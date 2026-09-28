
import React, { useState } from 'react';

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"



import type { Product } from '@/schemas/product'

export function ProductCard({ product }: { product: Product }) {
    const discountPercentage = () => {
        const difference = product.price - product.discountedPrice
        const fractionOfDiscountedPrice = difference / product.price
        return Math.round(fractionOfDiscountedPrice * 100)
    }


    return (
        <Card className={'relative max-w-xs'}>
            {product.discountedPrice < product.price && (
                <Badge className={'bg-terracotta absolute top-2 right-2'}>{discountPercentage()}%</Badge>
            )}
            <CardHeader className={'flex justify-center'}>
                <img src={product.image.url} alt={product.image.alt} className={'w-full aspect-square object-cover rounded-md'} />
            </CardHeader>
            <CardContent>
                <CardTitle className={'text-xl'}>{product.title}</CardTitle>
                <div className={'flex gap-5 my-2 text-lg'}>
                    <p>{product.discountedPrice}</p>
                    {product.discountedPrice < product.price && (
                        <p className={'line-through text-gray-500'}>{product.price}</p>
                    )}
                </div>
                <CardDescription className={'flex flex-col gap-2'}>
                    <p>{product.description}</p>
                    <p>Product rating: {product.rating}</p>
                </CardDescription>
            </CardContent>
        </Card>
    )
}
