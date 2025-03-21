import { ProductType } from "@/.next/types/product"
import ProductImgMiniature from "@/components/shared/product-img-miniature"
import ProductTasteOrigin from "@/components/shared/product-taste-origin"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useLovedProducts } from "@/hooks/use-loved-products"
import { FormatPrice } from "@/lib/fromat-price"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface LovedItemProductProps {
    product: ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) =>{
    const {product } = props
    const {removeLovedItem} = useLovedProducts()
    const { addItem } = useCart()

    const addToCheckout = ()=> {
        addItem(product)
        removeLovedItem(product.id)
    }

    return (
    <li className="flex py-6 border-b">
        <ProductImgMiniature slug={product.slug} urlImage={product.images[0].url}/>
        <div className="flex justify-between flex-1 px-6">
            <div>
                <div>
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p className="font-bold">{FormatPrice(product.price)}</p>
                    <ProductTasteOrigin origin={product.origin} taste={product.taste}/>
                </div>
                <Button className="mt-5 rounded-full cursor-pointer" onClick={addToCheckout}>
                    Add to cart
                </Button>
            </div>
            <div>
                <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition cursor-pointer")}>
                    <X size={20} onClick={()=> removeLovedItem(product.id)}/>
                </button>
            </div>
        </div>
    </li>
    )
}

export default LovedItemProduct;