import { ProductType } from "@/.next/types/product";
import ProductImgMiniature from "@/components/shared/product-img-miniature";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { useCart } from "@/hooks/use-cart";
import { FormatPrice } from "@/lib/fromat-price";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const { product } = props
    const {removeItem} = useCart()
    return ( 
        <li className="flex py-6 border-b">
            <ProductImgMiniature slug={product.slug} urlImage={product.images[0].url}/>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p className="font-bold">{FormatPrice(product.price)}</p>
                    <ProductTasteOrigin origin={product.origin} taste={product.taste}/>
                </div>
                <div>
                        <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={()=> removeItem(product.id)}/>
                        </button>
                        
                    </div>
            </div>
        </li>
     );
}
 
export default CartItem;