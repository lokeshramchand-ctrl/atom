import { useEffect, useState } from "react"

export function useDashData() {

    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://dummyjson.com/products?limit=4")
                if (!res.ok) {
                    throw new Error("Fetch failed")
                }
                const json = await res.json()
                const transformed = json.products.map((p: any, i: number) => ({
                    name: `Cluster ${String.fromCharCode(65 + i)}`,
                    cost: Math.round(p.price * 50),
                    efficiency: Math.floor(Math.random() * 15) + 85
                }))
                setData(transformed)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return {
        data,
        loading,
        error
    }
}