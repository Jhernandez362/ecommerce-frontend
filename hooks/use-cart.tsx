import {create} from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { ProductType } from "@/types/product"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

interface CartStore {
    items: ProductType[],
    addItem: (data: ProductType) => void,
    removeItem: (id: number) => void,
    removeAll: () => void
}


export const useCart = create(persist<CartStore>((set,get)=>({
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItems = currentItems.find((item) => item.id === data.id)

        if(existingItems){
            return toast("The product already exists in the cart")
        }

        set({
            items: [...get().items, data]
        })

        toast("Product added to cart")
    },

    removeItem: (id:number) => {
        set({items: [...get().items.filter((item) => item.id !== id)] })
        toast("Product removed from cart")
    },

    removeAll: () => set({items: []})
}), {
    name: "cart-storage",
    storage: createJSONStorage(()=> localStorage)
})) 