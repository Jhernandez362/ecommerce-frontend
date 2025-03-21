"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"


function Page() {
    const router = useRouter()
    return <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
        <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex justify-center md:min-w-[400px] py-6">
                <Image src="/success.png" alt="Success" width={250} height={500} className="rounded-lg" />
            </div>
            <div>
                <h1 className="text-3xl">Thank you for your purchase</h1>
                <p className="my-3">Our team will be working shortly to select the freshest beans and prepare your shipment with care and dedication. In the meantime, sit back, relax, and let the anticipation of the delicious aroma of freshly brewed coffee envelop you.</p>
                <p className="my-3">Thank you again for trusting us to satisfy your love of coffee. We look forward to you trying our exquisite flavors!</p>
                <p className="my-3">Enjoy your coffee!</p>
                <Button onClick={()=>router.replace("/")}>Return to the store</Button>
            </div>
        </div>
    </div>
}

export default Page
