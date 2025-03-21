import { PopoverContent } from "@radix-ui/react-popover";
import { Popover, PopoverTrigger } from "./ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (  
        <Popover>
            <PopoverTrigger>
                <div className="flex items-center justify-between">
                <Menu className="p-1" strokeWidth={3}></Menu>
                <p> Menu</p>
                
                </div>
                
            </PopoverTrigger>
            <PopoverContent>
                <Link href={"/category/bean"} className="block">Coffee beans</Link>
                <Link href={"/category/ground"} className="block">Ground coffee</Link>
                <Link href={"/category/capsule"} className="block">Capsule coffee</Link>
            </PopoverContent>
        </Popover>
    );
}
 
export default ItemsMenuMobile;