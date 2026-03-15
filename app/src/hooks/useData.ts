import { useEffect, useState } from "react"

export function useDashData() {
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://dummyjson.com/products?limit=4")
            const json = await res.json()
            const transformed = json.products.map((p: any, i: number) => ({
                name: `Cluster ${String.fromCharCode(65 + i)}`,
                cost: Math.round(p.price * 50),
                efficiency: Math.floor(Math.random() * 15) + 85
            }))
            setData(transformed)
            setLoading(false)
        }
        fetchData()
    }, [])
    return { data, loading }

}