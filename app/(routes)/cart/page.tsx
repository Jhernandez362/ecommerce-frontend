"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { FormatPrice } from "@/lib/fromat-price"
import CartItem from "./components/cart-item"
import { loadStripe } from "@stripe/stripe-js"
import { makePaymentRequest } from "@/api/payment"

export default function Page() {
    const { items, removeAll } = useCart()
    const prices = items.map((item) => item.price)
    const totalPrice = prices.reduce((total, price) => total + price, 0)

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

    console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    const buyStripe = async () => {
        try {
            const stripe = await stripePromise;
            if (!stripe) {
                console.error("Stripe did not load correctly.");
                return;
            }
            const res = await makePaymentRequest.post("/api/orders", {
                products: items
            })
            await stripe?.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
            removeAll()
        } catch (error) {
            console.log(error)
        }
    }

    console.log(items)
    return (
        <div className="max-w-6xl py-16 px-4 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
            <div className="grid sm:grid-cols-2 sm:gap-5">
                <div>
                    {items.length === 0 && (
                        <p>The cart is empty</p>
                    )}
                    <ul>
                        {items.map((item) => (
                            <CartItem key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
                <div className="max-w-xl">
                    <div className="p-6 rounded-lg bg-slate-100">
                        <p className="mb-3 text-lg font-semibold">Order summary</p>
                        <Separator />
                        <div className="flex justify-between gap-5 my-4">
                            <p>Order total</p>
                            <p>{FormatPrice(totalPrice)}</p>
                        </div>
                        <div className="flex ietms-center justify-center w-full mt-3">
                            <Button className="w-full" onClick={buyStripe}>Purchase</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


