"use client";

import { ResponseType } from "@/.next/types/response";
import { useGetProductsFromCategory } from "@/api/getProductFromCategory";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import FiltersControlsCategory from "../components/filters-controls-category";
import SkeletonSchema from "@/components/skeleton-schema";
import ProductCard from "../components/product-card";
import { ProductType } from "@/.next/types/product";
import { useState } from "react";

export default function Page(){
    const params = useParams()
    const { categorySlug } = params;
    const { result, loading }: ResponseType = useGetProductsFromCategory(String(categorySlug));
    const router = useRouter()

    const [filterOrigin, setFilterOrigin] = useState("")

    const filteredProducts = result !== null && !loading && (
        filterOrigin === '' ? result : result.filter((product: ProductType) => product.origin === filterOrigin)
    )
    
    return (
        <div className="max-w-6xl py-4 px-4 mx-auto sm:py-16 sm:px-12">
            {result !== null && !loading && (
                <h1 className="text-3xl font-medium mb-2">Coffee {result[0]?.category?.name}</h1>
            )}
            <Separator className="mb-2"/>
            <div className="flex flex-col sm:flex-row sm:gap-8">
                <FiltersControlsCategory setFilterOrigin={setFilterOrigin}/>
                <div className="flex-1 grid gap-6 mt-6 sm:mt-0 grid-cols-1 lg:grid-cols-2 p-4">
                    {loading && (
                        <SkeletonSchema grid={3}/>
                    )}
                    {filteredProducts !== null && !loading && (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id}  product={product}/>
                        ))
                    )}
                    {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
                        <p>No hay productos con este filtro.</p>
                    )}
                </div>
            </div>
        </div>
    )
}