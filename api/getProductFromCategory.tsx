"use client";

import { useEffect, useState } from "react";

export function useGetProductsFromCategory(slug:string | string[]){
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=> {
        const getProductsFromCategory = (async()=> {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResult(json.data)
                setLoading(false)
            } catch (error: any) {
                setError(error)
                setLoading(false)
            }
        })
        getProductsFromCategory()
    }, [url])

    return { loading, result, error }
}