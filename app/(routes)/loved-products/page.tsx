"use client"

import { useLovedProducts } from "@/hooks/use-loved-products"
import LovedItemProduct from "./components/loved-item-product"

export default function Page(){
    const { lovedItems } = useLovedProducts()


    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">
                Favorite Products
            </h1>
            <div>
                <div>
                    {lovedItems.length === 0 && (
                        <p>There are no favorite products</p>
                    )}
                    <ul>
                        {lovedItems.map((item)=>(
                            <LovedItemProduct key={item.id} product={item}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}