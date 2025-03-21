"use client"
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToogleTheme from "./toogle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

const Navbar = () => {

    const router = useRouter();
    const cart = useCart()
    const { lovedItems } = useLovedProducts()

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push("/")}>
                Coffee <span className="font-bold">Shop</span>
            </h1>
            <div className="sm:flex  hidden">
                <MenuList></MenuList>
            </div>
            <div className="sm:hidden flex"> 
                <ItemsMenuMobile></ItemsMenuMobile>
            </div>
            <div className="flex gap-2 sm:gap-7 items-center justify-center">
                {cart.items.length === 0 ? <ShoppingCart strokeWidth={2} className="cursor-pointer" onClick={()=> router.push("/cart")}/>
                : (
                    <div className="flex gap-1" onClick={()=> router.push("/cart")}>
                        <BaggageClaim strokeWidth={1} className="cursor-pointer"/>
                        <span>{cart.items.length}</span>
                    </div>
                )
                }
                
                <Heart strokeWidth={2} className={`cursor-pointer ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`} onClick={()=> router.push("/loved-products")}></Heart>
                <User strokeWidth={2} className="cursor-pointer" onClick={()=>router.push("/profile")}></User>
                <ToogleTheme/>
            </div>
        </div>);

}

export default Navbar;