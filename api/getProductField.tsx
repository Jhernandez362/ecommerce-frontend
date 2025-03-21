
import { ResultFiltersType } from "@/.next/types/result-filters-type";
import { useEffect, useState } from "react";

export function useGetProductField(){
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`;
    const [result, setResult]  = useState<ResultFiltersType | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=> {
        const getProductField = (async()=>{
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResult(json.data)
                setLoading(false)
            } catch (error:any) {
                setError(error)
                setLoading(false)
            }
        })
        getProductField()
    },[url])
    return {result, loading, error}
}