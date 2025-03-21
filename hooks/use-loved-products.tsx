import {create} from "zustand"
import {persist, createJSONStorage} from "zustand/middleware"
import { ProductType } from "@/types/product" 
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

interface useLovedProductType {
    lovedItems: ProductType[]
    addLovedItem: (data: ProductType) => void
    removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(persist<useLovedProductType>((set,get)=> ({
    lovedItems: [],
    addLovedItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItems = currentLovedItems.find((item)=> item.id === data.id)

        if(existingItems) {
            return toast("Product has already been added to favorites")
        }

        set({
            lovedItems: [...get().lovedItems, data]

        })
        toast("Product has been added to favorites")
    },
    removeLovedItem: (id: number) => {
        set({lovedItems: [...get().lovedItems.filter((item) => item.id !== id)]})
        toast("Product removed from favorites")
    }
}), {
    name: "loved-products-stora",
    storage: createJSONStorage(()=> localStorage)
}))