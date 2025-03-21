"use client";

import { ResponseType } from "@/.next/types/response";
import { useGetProductBySlug } from "@/api/getProductBySlug";
import { useParams } from "next/navigation";
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";

export default function Page(){
    const params = useParams()
    const {productSlug } = params

    const { result, loading }: ResponseType = useGetProductBySlug(String(productSlug));

    if(loading){
        return <SkeletonProduct></SkeletonProduct>
    }
    if(!loading && result.length ===0){
        return <p>Product no found</p>
    }else{
        return <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselProduct images={result[0].images}/>
                </div>
                <div className="sm:px-12">
                    <InfoProduct product={result[0]}/>
                </div>
            </div>
        </div>
    }
    
}