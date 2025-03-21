import { useRouter } from "next/navigation";
interface ProductImgMiniatureProps {
    slug: string
    urlImage: string
}

const ProductImgMiniature = (props: ProductImgMiniatureProps) => {
    const router = useRouter()
    const { slug, urlImage } = props
    return (  
        <div onClick={()=> router.push(`/product/${slug}`)} className="cursor-pointer">
                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${urlImage}`} alt="Product" 
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"/>
        </div>
    );
}
 
export default ProductImgMiniature;