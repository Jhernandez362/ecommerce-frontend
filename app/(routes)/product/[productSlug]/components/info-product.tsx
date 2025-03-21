"use client";

import { ProductType } from "@/.next/types/product";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { FormatPrice } from "@/lib/fromat-price";
import { Heart } from "lucide-react";

export type InfoProductProps = {
    product: ProductType
}

const InfoProduct = (props: InfoProductProps) => {
    const {product} = props
    const {addItem} = useCart()
    const {lovedItems, addLovedItem, removeLovedItem} = useLovedProducts()
    if (!product) return <p>Producto no encontrado</p>;
    const isLoved = lovedItems.some((item) => item.id === product.id);

    return ( 
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl">{product.name}</h1>
                <ProductTasteOrigin origin={product.origin} taste={product.taste}/>
            </div>
            <Separator/>
            <p className="my-4">{product.description}</p> 
            <Separator className="my-4"/>
            <p className="my-4 text-2xl">{FormatPrice(product.price)}</p>
            <div className="flex items-center gap-4">
                <Button className="flex-1" onClick={()=> addItem(product)}>Purchase</Button>
                {isLoved ? (
                    <Heart 
                        strokeWidth={2} 
                        className="transition duration-300 cursor-pointer hover:fill-white dark:hover:fill-black dark:fill-white fill-black"
                        onClick={() => removeLovedItem(product.id)}
                    />
                ) : (
                    <Heart 
                        strokeWidth={2} 
                        className="transition duration-300 cursor-pointer hover:fill-black dark:hover:fill-white"
                        onClick={() => addLovedItem(product)}
                    />
                )}     
            </div>
        </div>
     );
}
 
export default InfoProduct;