import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">
                Get up to 25% off
            </h2>
            <h3 className="mt-3 font-semibold">20% off purchases over $100 and 25% off purchases over $150. Use the code FIRSTPURCHASE</h3>
            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants()}>Buy</Link>
                <Link href="#" className={buttonVariants({variant: "outline"})}>More information</Link>
            </div>
        </div>
    );
}
 
export default BannerDiscount;