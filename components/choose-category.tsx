"use client";

import { useGetCategory } from "@/api/getProduct";
import { ResponseType } from "@/.next/types/response";
import Link from "next/link";
import { CategoryType } from "@/.next/types/category";

const ChooseCategory = () => {
    const {result, loading, error}: ResponseType = useGetCategory()
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Choose your favorite category</h3>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {!loading && result !== undefined && (
                    result.map((category: CategoryType) => (
                        <Link key={category.id} href={`/category/${category.slug}`} 
                        className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"> 
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`}
                        alt={`${category.name}`}
                        className="w-full h-auto aspect-[4/3] object-cover transition duration-300 ease-in-out rounded-lg hover:scale-110">
                        </img>
                        <p className="absolute w-full text-lg py-2 font-bold text-with text-center bottom-5 backdrop-blur-lg">{category.name}</p>
                        </Link>
                    ))
                )}

            </div>
        </div>
    );
}
 
export default ChooseCategory;