import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <div className="relative h-[450px] lg:h-[600px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/slider-image.jpg')" }}>

            {/* Dark filter to improve text visibility */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Image-centric content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <p className="text-lg">Immerse yourself in a unique experience</p>
                <h4 className="mt-2 text-5xl md:text-6xl font-extrabold uppercase">Exquisite coffee</h4>
                <p className="my-2 text-lg">Awaken your senses with every sip</p>
                <Link href={"#"} className={buttonVariants({ variant: "secondary", size: "lg" }) + " mt-5"}>
                    Purchase
                </Link>
            </div>
        </div>
    );
}

export default BannerProduct;