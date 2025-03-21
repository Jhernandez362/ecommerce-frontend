import { ProductType } from "@/.next/types/product";
import IconButton from "@/components/icon-button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { FormatPrice } from "@/lib/fromat-price";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProductCardProps = {
    product: ProductType
}

const ProductCard = (props: ProductCardProps) => {
    const {product} = props;
    const router = useRouter();
    return (
        <Link href={`product/${product.slug}`} className="relative p-3 transition-all duration-200 rounded-lg hover:shadow-lg bg-white dark:bg-gray-900">
            <div className="absolute top-4 left-2 flex gap-2 z-10">
                <span className="px-2 py-1 text-xs font-semibold text-white bg-black rounded-full dark:bg-white dark:text-black">
                    {product.taste}
                </span>
                <span className="px-2 py-1 text-xs font-semibold text-white bg-yellow-900 rounded-full">
                    {product.origin}
                </span>
            </div>

            <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
                <CarouselContent>
                    {product.images.map((image) => (
                        <CarouselItem key={image.id} className="relative group">
                            <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`} 
                                alt={product.name}
                                className="rounded-xl object-cover w-full h-48"
                            />
                            <div className="absolute w-full bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex justify-center gap-4">
                                    <IconButton classname="bg-white shadow-md hover:bg-gray-200" onClick={() => router.push(`/product/${product.slug}`)} icon={<Expand size={20} className="text-gray-600"/>} />
                                    <IconButton classname="bg-white shadow-md hover:bg-gray-200" onClick={() => router.push("#")} icon={<ShoppingCart size={20} className="text-gray-600"/>} />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="mt-4 text-center">
                <p className="text-lg font-medium">{product.name}</p>
                <p className="text-xl font-bold text-yellow-900">{FormatPrice(product.price)}</p>
            </div>
        </Link>
    );
}
 
export default ProductCard