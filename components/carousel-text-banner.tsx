"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTop = [
    {
        id: 1,
        title:"Shipping in 24/48 hours",
        description: "As a VIP customer, you get your products in 24/48 hours",
        link:"#!"
    },
    {
        id: 2,
        title:"Get up to 25% off purchases over $150",
        description: "20% off purchases over $100 and 25% off purchases over $150",
        link:"#!"
    },
    {
        id: 3,
        title:"Free returns and deliveries",
        description: "As a VIP customer you have free shipping and returns within 15 days.",
        link:"#!"
    },
    {
        id: 4,
        title:"Buy new arrivals",
        description: "All the new arrivals with discounts of up to 50%",
        link:"#!"
    },
]

const CarouselTextBanner = () => {
    const router = useRouter()
    return ( 
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto" 
            plugins={[
                Autoplay({ delay: 3500 })
            ]}>
               <CarouselContent>
            {dataCarouselTop.map(({id,title,description,link}) => (
                <CarouselItem key={id} onClick={()=> router.push(link)} className="cursor-pointer">
                    
                        <Card className="shadow-none border-none bg-transparant">
                            <CardContent className="flex flex-col justify-center p-1 items-center text-center">
                            <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                            <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                            </CardContent>

                        </Card>
                    
                </CarouselItem>
            ))}
            </CarouselContent>
            </Carousel>
        </div>
     );
}
 
export default CarouselTextBanner;