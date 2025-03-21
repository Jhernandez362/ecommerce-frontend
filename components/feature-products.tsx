"use client";

import { ResponseType } from "@/types/response";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeleton-schema";
import { ProductType } from "@/types/product";
import { Expand, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";
import IconButton from "./icon-button";
import { useCart } from "@/hooks/use-cart";



const FeaturesProducts = () => {
    const { loading, result }: ResponseType = useGetFeaturedProducts()
    const router = useRouter()
    const {addItem} = useCart()
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-xl sm:pb-8">Featured Products</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {result !== null && (
                        result.map((product: ProductType) => {
                            if (!product || !product.id) {
                                console.warn("Product without attributes:", product);
                                return null;
                            }
                            const { id, slug, images, name, taste, origin } = product;
                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 border border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6">

                                                {images?.length > 0 ? (
                                                    <img
                                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0]?.url}`}
                                                        alt="Image featured"
                                                        className="w-full h-45 object-contain"
                                                    />

                                                ) : (
                                                    <p>No image available</p>
                                                )}
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center gap-x-6">
                                                        <IconButton onClick={() => router.push(`product/${slug}`)}
                                                            icon={<Expand />} classname="text-gray-600" />
                                                        <IconButton onClick={() => addItem(product)} icon={<ShoppingCart />}
                                                            classname="text-gray-600" />
                                                    </div>
                                                </div>

                                            </CardContent>
                                            <div className="flex flex-col gap-2 px-8">
                                                <h3 className="text-lg font-bold">{name}</h3>
                                                <div className="flex items-center gap-3">
                                                    <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{taste}</p>
                                                    <p className="px-2 py-1 text-white bg-yellow-900 rounded-full">{origin}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>);
}

export default FeaturesProducts;